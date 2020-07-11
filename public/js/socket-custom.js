var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//on para escuchar eventos
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//emit son para enviar inf
socket.emit('enviarMensaje', {
    usuario: 'Zullyvan',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respusta server', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});