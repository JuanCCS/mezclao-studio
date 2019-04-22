from sanic import Sanic
from sanic import response
import os
import json
from sanic_cors import CORS, cross_origin
import asyncio

app = Sanic()
CORS(app)

portfolio_db_path = 'portfolio.json'

def make_file_route(name,route,res_file):
    print(route)
    @app.route(route)
    def _method(self):
        return response.file(res_file)
    return _method

def make_json_route(name,route,res_json):
    @app.route(route)
    def _method(self):
        return response.json(res_json)
    return _method

def make_client_routes(json_obj):
    return ''

def make_category_routes(json_obj):
    for category_name in json_obj['categories']:
        make_file_route(os.path.join(category_name, 'cover'), os.path.join(category_name, 'cover'), json_obj[category_name]['cover'])
        for client_name in json_obj[category_name]['clients']:
            make_file_route(os.path.join(client_name, json_obj[client_name]['cover']), os.path.join(client_name, json_obj[client_name]['cover']), json_obj[client_name]['cover'])
            for file_name in json_obj[client_name]['files']:
                print(os.path.join(category_name, client_name, file_name))
                make_file_route(os.path.join(category_name, client_name, file_name), os.path.join(category_name, client_name, file_name), json_obj[file_name])
    return ''
def make_server():

    with open(portfolio_db_path) as portfolio_json:
        portfolio_data = json.load(portfolio_json) 

    @app.route('/portfolio_json')
    def get_portfolio(req):
        return response.json(portfolio_data)

    make_category_routes(portfolio_data)


    app.run(host='localhost', port=8000)

if __name__ == '__main__':  
    make_server()
   