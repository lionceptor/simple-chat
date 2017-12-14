var app = require('express')();
var http = require('http').Server(app);
var port = 3000;
var io = require('socket.io')(http);


console.log("Hi Mrs. Horning!";)

app.get('/', function(req,res)
{
	res.sendFile(__dirname + '/index.html');

});

io.on('connection', function(socket)
{
	socket.on('chat message', function(text)
	{
		console.log('test message: ' + text);	
	});
});

http.listen(port);
console.log("Listening on port" + port);