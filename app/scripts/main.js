console.log('\'Allo \'Allo!');

  var socket = io.connect('http://0.0.0.0:9000');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
