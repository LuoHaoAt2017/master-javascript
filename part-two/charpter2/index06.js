//首先启动index02.js，它是服务器。
function request(url, callback) {
  callback(url);
}

var a = 0;

request('http://localhost:8080', function() {
  console.log('a', a);
});

a++;

/**
 * 过早执行，也就是说a = 0
 * 建议：回调函数永远异步执行
 * 改进版本在index07.js
 */