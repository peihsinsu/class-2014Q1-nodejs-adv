Class2 Lab1
====

## 說明

以Server系統資源(CPU, Memory)為例，開發顯示系統資訊的Realtime網站

## 程式片段

操作讀取系統之記憶體值：

```
# Sample Code
var os = require('os');
var mem = {
  free: os.freemem(),
  total: os.totalmem(),
  usage: os.freemem()/os.totalmem()
}
console.log(mem);
```

## SocketIO片段

Server Socket

```
var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
```

Client Socket

```
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io.connect('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>
```

