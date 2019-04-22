from __future__ import print_function

import json
import pickle
import os.path
import io
import json
from googleapiclient.http import MediaIoBaseDownload
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import pandas as pd

SCOPES = ['https://www.googleapis.com/auth/drive']

class Category:
    def __init__(self, name, id):
        self.name = name
        self.folder_id = id
        self.cover = ''
        self.clients = []

    def add_clients(self, clients):
        self.clients = clients

class Client:
    def __init__(self, name, id):
        self.cover = ''
        self.files = []
        self.folder_id = ''
        self.name = name
        self.folder_id = id

class FileData: 
    def __init__(self, name, mimeType, file_id):
        self.name = name
        self.mimeType = mimeType
        self.file_id = file_id
        self.clean_name = ''

def list_files_in_folder_with_id(drive_service, parent_id):
    response = drive_service.files().list(q="'{}' in parents".format(parent_id),
            pageSize=10, fields="nextPageToken, files(id, name, kind, parents, mimeType)").execute()

    return response

def parse_categories(categories_response):
    categories = []
    for file in categories_response.get('files', []):
        if file.get('mimeType') == 'application/vnd.google-apps.folder':
            category = Category(file.get('name'), file.get('id'))
            categories.append(category)
    page_token = categories_response.get('nextPageToken', None)
    return categories

def parse_clients(category, clients_response):
    clients=[]
    for file in clients_response.get('files', []):
        if file.get('mimeType') == 'application/vnd.google-apps.folder':
            client = Client(file.get('name'), file.get('id'))
            clients.append(client)
        
        file_name = os.path.splitext(file.get('name'))[0].lower()
        if file_name == 'cover':
            category.cover = FileData(file.get('name'), file.get('mimeType'), file.get('id'))
    
    category.add_clients(clients)


def parse_client_files(client, clients_response):
    accepted_mime_types = ['image/svg+xml', 'image/png', 'image/jpg', 'image/jpeg']
    for file in clients_response.get('files', []):
        print(file.get('mimeType'))
        client_file = ''
        if file.get('mimeType') in accepted_mime_types:
            client_file = FileData(file.get('name'), file.get('mimeType'), file.get('id'))
            client.files.append(client_file)

        file_name = os.path.splitext(file.get('name'))[0].lower()
        if file_name == 'cover':
            client_file.name = client.name + file.get('name')
            client.cover = FileData(client.name + file.get('name'), file.get('mimeType'), file.get('id'))
    
       

def download_file(drive_service, file_data, folder_path):
    request = drive_service.files().get_media(fileId=file_data.file_id)
    fh = io.BytesIO()
    downloader = MediaIoBaseDownload(fh, request)
    done = False
    while done is False:
        status, done = downloader.next_chunk()
        print("Download %d%%." % int(status.progress() * 100))

    clean_name = file_data.name
    clean_name = clean_name.replace(' ', '').replace('#', '').lower()
    file_data.clean_name = clean_name

    file_location = os.path.join(folder_path, clean_name)

    with open(file_location,'wb') as out: ## Open temporary file as bytes
        out.write(fh.getvalue()) 

def download_files(drive_service, categories):
    for category in categories:
        folder_path = os.path.join('portfolio', category.name)
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
        if category.cover != '':
            download_file(drive_service, category.cover, folder_path)
        else:    
            print("Directory " , folder_path ,  " already exists")
        for client in category.clients:
            folder_path = os.path.join('portfolio', category.name, client.name)
            if not os.path.exists(folder_path):
                os.makedirs(folder_path)
                print("Directory " , folder_path ,  " Created ")
            else:    
                print("Directory " , folder_path ,  " already exists")
            if client.cover != '':
                download_file(drive_service, client.cover, folder_path)
            
            for file_data in client.files:
                download_file(drive_service, file_data, folder_path)

def make_routes(categories, json_dict):
    portfolio_json_object = {}
    portfolio_json_object['categories'] = []
    portfolio_json_object['clients'] = []
    for category in categories:
        portfolio_json_object['categories'].append(category.name)
        portfolio_json_object[category.name] = {}
        portfolio_json_object[category.name]['clients'] = []
        portfolio_json_object[category.name]['covers']=[]
        if category.cover != '':
            portfolio_json_object[category.name]['cover'] = os.path.join('portfolio', category.name, category.cover.clean_name) 
        for client in category.clients:
            portfolio_json_object[category.name]['clients'].append(client.name)
            portfolio_json_object[client.name] = {}
            portfolio_json_object[client.name]['files'] = []
            portfolio_json_object[client.name]['data'] = json_dict[client.name]
            if client.cover != '':
                path_cover = os.path.join('portfolio', category.name, client.name, client.cover.clean_name)
                portfolio_json_object[category.name]['covers'].append(path_cover)
                portfolio_json_object[client.name]['cover'] = path_cover
            for file in client.files:
                portfolio_json_object[client.name]['files'].append(file.clean_name)
                portfolio_json_object[file.clean_name] = os.path.join('portfolio', category.name, client.name, file.clean_name)

    with open('portfolio.json', 'w') as out_json_file:  
        json.dump(portfolio_json_object, out_json_file)

    return


def main():

    '''
    
        THIS IS THE PART WHERE WE PARSE THE FILES
    
    '''

    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server()
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    mezclao_service = build('drive', 'v3', credentials=creds)

    mezclao_folder_id = "1zkdXCowT0qsSp4uWAJsPuQinRbzlvOpF"
    sheet = pd.read_csv('portfolio_spreadsheet.csv')
    print(sheet.head())
    json_dict_guide = {}
    for i in sheet.index:
        row = sheet.loc[i]
        json_dict_guide[row['folder_name']] = row.to_json()

    print(json_dict_guide)
    response = list_files_in_folder_with_id(mezclao_service, mezclao_folder_id)
    
    # parsing through outer files (categories)
    categories = parse_categories(response)

    # parse all category folders
    for category in categories:
        response = list_files_in_folder_with_id(mezclao_service, category.folder_id)

        parse_clients(category, response)
        for client in category.clients:
            files_response = list_files_in_folder_with_id(mezclao_service, client.folder_id)
            parse_client_files(client, files_response)
        
            # once the categories are in objects, what you want to do is download 
            # the files and create a routes.json file
            # with all the necessary information so that the sanic server can provide 
            # you with the images etc


    download_files(mezclao_service, categories)
    make_routes(categories, json_dict_guide)



if __name__ == '__main__':
    main()