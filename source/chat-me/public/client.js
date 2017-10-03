$(function () {

    var socket = io.connect( 'http://localhost:80' );
    $('form').submit(function () {
        socket.emit('message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('message', function (msg) {
        $('#messages').append($('<li>').text(msg));
    });
});