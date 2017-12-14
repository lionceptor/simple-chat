var app = require('express')();
var http = require('http').Server(app);
var port = 3000;

app.get('/', function(req,res)
{
	res.send('Hello World!');

}).listen(port); 