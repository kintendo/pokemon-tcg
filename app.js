var express = require('express');
var app = express();
var server = app.listen(9000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});
var io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static('./bower_components'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
