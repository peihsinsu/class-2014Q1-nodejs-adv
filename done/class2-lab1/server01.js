var fs = require('fs')
	, app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , os = require('os');

// 發佈socket.io server，並且聽取8080 port
app.listen(8080);

/**
 * 實作socket io，並在connection開啟後，於callback function中實作要處理的事件
 */
io.sockets.on('connection', function (socket) {
  /**
   * 每隔三秒鐘進行一次emit動作
   * 而emit的內容是發佈一個news
   * 內容為JSON物件，以time為key，value為emit當下的時間
   */
  setInterval(function(){
		//TODO: implement the cpu, memory fetch method and emit to frontend
    socket.emit('news', getState());
  }, 3000);
  
  /**
   * 接收client傳回的事件，並且於callback內接收該data做處理
   */
  socket.on('my other event', function (data) {
      console.log('[my other event]' + data);
  });
});

/**
 * 建立server實體，目的是方便鏈結html檔案，讓前端可以連線直接測試
 */
function handler(req, res) {
	console.log('[%s] %s', new Date(), req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  //任何連線都直接讀取client01.html做回覆
	var out = fs.readFileSync(__dirname + '/client01.html', 'utf8');
  res.end(out);
}

function getState() {
	var mem = {
		free: os.freemem(),
		total: os.totalmem(),
		usage: os.freemem()/os.totalmem()
	}
	return mem;
}


console.log('Server running at http://127.0.0.1:8080/');
