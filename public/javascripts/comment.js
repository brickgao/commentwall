$(document).ready(function() {
  var socket = io.connect();
  socket.on('msg', function(data) {
    var com = new comment_dm(data.msg, data.color, data.size);
  });
});

