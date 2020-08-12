const { io } = require('../server');

io.on('connection', (client)=>{
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta app!'
    });

    client.on('disconnect', ()=>{
        console.log('Usuario desconetado');
    });

    // Escuchar cliente
    client.on('enviarMensaje', (data, callback)=>{
        console.log(data);

        // broadcats - regresa la respuesta a todos los clientes
        client.broadcast.emit('enviarMensaje', data);
        // if(mensaje.usuario){
        //     callback({
        //         resp: 'Todo salio bien!'
        //     });
        // }else{
        //     callback({
        //         resp: 'salio mal!'
        //     });
        // }

        
    })
})