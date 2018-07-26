var express = require('express');
var app = express();
var http = require('http').Server(app);
var socket = require('socket.io')(http);

//Setting Express
app.use(express.static('public'));

//Setting up sockets
socket.on('connection', function(socket) {
    console.log('user connected ->', socket.id);
});

//Setting up server for listening
http.listen(3000, function() {
  console.log('listening on *:3000');
});