import socketio

sio = socketio.Client()

sio.connect('http://localhost:4444')



@sio.on('fromAngular')
def on_message(data):
    print(data)


