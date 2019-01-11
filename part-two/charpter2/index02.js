var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  req.on('data', function(chunk) {

  });

  req.on('end', function() {
    var rs = fs.createReadStream('./source/hello.txt');
    rs.pipe(res);
  });
}).listen(8080, 'localhost');

server.on('close', function() {

});

server.on('listening', function() {
  console.log('server is listening at port 8080.');
});

server.on('error', function() {

});

// server.on('connection', function(socket) {

//   socket.on('connect', function() {

//   });

//   socket.on('data', function(data) {

//   });

//   socket.on('end', function() {

//   });

//   socket.on('close', function(flag) {

//   });

//   socket.on('error', function(err) {

//   });

//   socket.on('timeout', function() {

//   });

// });