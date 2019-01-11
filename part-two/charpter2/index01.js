var fs = require('fs');
var request = require('request');

var options = {
  url: 'http://localhost:8080/source/hello.txt',
  method: 'GET'
};

console.log('------------------------------------');
request(options, function callback(err, res, body) {
  if (err) { throw err; }
  var response = {
    code: res.statusCode, 
    message: res.statusMessage,
  }
  fs.createWriteStream('./output/hello.txt').write(body);
  console.log(response);
});
console.log('************************************');

/**
 * 单线程的事件循环队列。
 * JavaScript的异步执行不是多任务同时执行，而是快速的上下文切换。
 * 精确地编写和追踪使用回调的代码本身就是很难的。
 */

/**
 * 从callback到promise
 */