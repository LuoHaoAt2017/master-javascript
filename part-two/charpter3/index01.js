//使用异步表达程序的异步和并发存在两个问题
//第一个是缺乏顺序性
//第二个是缺乏安全性

//本章我们的主角promise就要解决这两个问题
//首先搭建一个HTTP服务器，模拟真实的请求
var http = require('http');

http.createServer(function(req, res) {

  var body = '', request = requestInfo(req);
  //监听来自请求体的数据，请求体的数据以流的形式传输
  req.on('data', function(chunk) {
    body += chunk;
  });

  req.on('end', function() {
    body = JSON.stringify(body);
  });

  req.on('error', function() {
    console.log('request error');
  });

  req.on('close', function() {
    console.log('request close');
  });
}).listen(8080, 'localhost', function() {
  console.log('server is listening on 8080');
});

function requestInfo(req) {
  if (!req) {
    return null;
  } else {
    return {
      method: req.method,
      url: req.url,
      headers: req.headers,
      code: req.statusCode,
      message: req.statusMessage,
    }
  }
}