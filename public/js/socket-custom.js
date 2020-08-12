let socket = io();
socket.on('connect', function(){
    console.log('Conectado al servidor');  
});

// Escuchar información del server 
socket.on('disconnect', function(){
    console.log('perdimos conexión con el servidor');
});

// Enviar información al server
socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log('Respuesta server: ', resp);
}); 

//  Escuchar información del server 
socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje);
})