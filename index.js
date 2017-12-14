var app = require('express')();
var http = require('http').Server(app);
var port = 3000;
var io = require('socket.io')(http);

app.get('/', function(req,res)
{
	res.sendFile(__dirname + '/index.html');

});

io.on('connection', function(socket)
{
	console.log('new connection');
});

http.listen(port);