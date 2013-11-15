$(document).ready(function() {
  var socket = io.connect();
  $("button").click(function() {
    var $msg = $("#sentence").val();
    var $color = $("#color").val();
    var $size = $("#size").val();
    if($msg == "")  return;
    socket.emit('post', {msg: $msg, color: $color, size: $size});
  });
});

