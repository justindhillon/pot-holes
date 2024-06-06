from http.server import SimpleHTTPRequestHandler, HTTPServer
import json
import os
import ssl

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def end_headers(self):
        self.send_cors_headers()
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)  # No Content
        self.end_headers()

    def do_POST(self):
        self.send_response(201)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        try:
            new_feature = json.loads(post_data.decode('utf-8'))
            if new_feature.get("type") != "Feature":
                raise ValueError("Invalid feature format")

            # Ensure the database.json file exists and is properly initialized
            if not os.path.exists('database.json'):
                with open('database.json', 'w') as file:
                    json.dump({"type": "FeatureCollection", "features": []}, file, indent=4)


            with open('database.json', 'r+') as file:
                data = json.load(file)
                data['features'].append(new_feature)  # Append new feature to the list of features
                file.seek(0)
                json.dump(data, file, indent=4)
                file.truncate()

            self.wfile.write(json.dumps({"message": "Feature added successfully"}).encode('utf-8'))
        except (json.JSONDecodeError, ValueError) as e:
            self.send_response(400)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))

def run(server_class=HTTPServer, handler_class=CORSRequestHandler, port=8001):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Serving on port {port} with SSL')

    # Set up SSL context to use secure TLS protocols
    context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    context.load_cert_chain('/etc/letsencrypt/live/potholepatrolapi.co/fullchain.pem',
                            '/etc/letsencrypt/live/potholepatrolapi.co/privkey.pem')
    httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
    
    httpd.serve_forever()

if __name__ == '__main__':
    run()
