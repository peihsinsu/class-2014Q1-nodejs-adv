Class2 Lab2
====

## 說明

依照課程所示流程，使用SocketIO方式，完成對話範例，參考資料：https://github.com/peihsinsu/class-nodejs-socketio

## 程式片段

Server Socket Process

```
function handler (req, res) {
  //implement of reading chat.html
}
io.sockets.on('connection', function (socket) {
  socket.on('addme',function(username) {
    //implement of emit event user add
  });
  socket.on('sendchat', function(data) {
    //implement of emit event of chat
  });
  socket.on('disconnect', function() {
    //implement of emit evnet of disconnect
  });
});
```

Client Socket Process

```
<script>
  var socket = io.connect('/');
  socket.on('connect', function() {
    //implement of connect event
  });
  socket.on('chat',function(username, data) {
    //implement of chat event receive
  });
  $(document).ready(function(){
    $('#sendtext').click(function(){
//implement of submit chat      
    });
  });
</script>
```
