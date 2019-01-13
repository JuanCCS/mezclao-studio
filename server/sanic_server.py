from sanic import Sanic
from sanic import response
import os
import json
from sanic_cors import CORS, cross_origin
import asyncio

app = Sanic()
CORS(app)

db_path = 'db'
shop_path = 'shop/shop.json'
shop_images_path = 'shop_images'

def make_file_route(name,route,res_file):
    @app.route(route)
    def _method(self):
        return response.file(res_file)
    return _method

def make_json_route(name,route,res_json):
    @app.route(route)
    def _method(self):
        return response.json(res_json)
    return _method

def make_client_routes(json_obj, file_name):
    portfolio_route = os.path.join('./portfolio', file_name)
    pics = os.listdir(portfolio_route)
    json_obj['pics'] = pics
    client_route = os.path.join('/clients', file_name)
    _json_route = make_json_route(file_name, client_route, json_obj)
    setattr(app, file_name, _json_route)
    index = 0
    for pic in json_obj['pics']:
        index += 1
        pic_path = os.path.join(portfolio_route, pic)
        pic_route = os.path.join('pics',file_name, pic)
        _dynamic_route = make_file_route(pic + str(index) + file_name, pic_route, pic_path)
        setattr(app, pic + str(index) + file_name, _dynamic_route)

def make_server():
    dirs = os.listdir(db_path)
    names = []
    for json_file in dirs:
        file_path = os.path.join(db_path,json_file)
        file_name = os.path.splitext(json_file)[0]
        names.append(file_name)
        with open(file_path) as client_file:
            json_obj = json.load(client_file)
            make_client_routes(json_obj, file_name)

    @app.route('/clientnames')
    def client_names(req):
        return response.json({'clients': names})
    

    with open(shop_path) as shop_json:
        data = json.load(shop_json) 
        @app.route('/shopitems')
        def shop_items(req):
            return response.json(data)

    app.run(host='localhost', port=8000)

if __name__ == '__main__':  
    make_server()
   