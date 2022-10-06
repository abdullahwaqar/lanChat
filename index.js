var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Setting Express
app.use(express.static('public'));

//Setting up sockets
io.on('connection', function (socket) {
    console.log('user connected ->', socket.id);

    //Recieving Call backs
    socket.on('chat', function (data) {
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data);
    });
});

//Setting up server for listening
http.listen(process.env.PORT || 3000, function () {
    console.log('listening on *:3000');
});