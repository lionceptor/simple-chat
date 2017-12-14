var app = require('express')();
var http = require('http').Server(app);
var port = 3000;
var io = require('socket.io')(http);

console.log("Hi Mrs. Horning!");

app.get('/', function(req,res)
{
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket)
{
	socket.on('chat message', function(text)
	{
		console.log('msg: ' + text);	
	});
});

http.listen(port);
console.log("Listening on port: " + port);
console.log("enter localhost:3000 to join server");

