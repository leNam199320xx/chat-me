var socket = require( 'socket.io' );
var express = require( 'express' );
var http = require( 'http' );

var app = express();

app.use(express.static(__dirname + '/public'));

var server = http.createServer( app );

var io = socket.listen( server );

io.sockets.on( 'connection', function( client ) {	
    console.log("user" + client.id)
	client.on('message', function( data ) {
		io.sockets.emit('message', data);
		console.log(data);
	});
});

server.listen( 80 );
