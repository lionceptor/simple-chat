var app = require('express')();
var http = require('http').Server(app);
var port = 3000;

app.get('/', function(req,res)
{
	res.sendFile(__dirname + '/index.html');

}).listen(port); 

io.on('connection', function(socket)
{
	console.log('new connection');
});