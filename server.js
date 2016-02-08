var express = require('express');
var server = express();

server.use(express.static('./public'));
var connection = server.listen(3000);

var five = require("johnny-five");
var board = new five.Board();
var servo;
board.on("ready", function() {
  servo = new five.Servo(10);

  // Add servo to REPL (optional)
  this.repl.inject({
    servo: servo
  });
});

var io = require('socket.io').listen(connection);

io.sockets.on('connection', function(socket) {
  socket.on('sliderChange', function(payload) {
    // console.log('Slider: ' + payload);
    servo.to(payload);
  });
});

console.log('Server is running at port 3000');
