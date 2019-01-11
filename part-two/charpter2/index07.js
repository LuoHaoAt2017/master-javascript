//首先启动index02.js，它是服务器。
var request = require('request');

function async(func, delay) {
  var pid = setTimeout(function() {
    pid = null;
    func(new Error('timeout'), null);
  }, delay);

  return function() {
    if (pid) {
      clearTimeout(pid);
      func(null, 'success');
    }
  }
};

function print(err, res) {
  if (err) {
    console.log('error message', err);
  } else {
    console.log('a', a, ' res ', res);
  }
}

var a = 0;
request('http://localhost:8080', async(print, 100));
a++;

/**
 * 超时取消事件异步I/O不会阻塞，
 * 执行request请求时，async函数的调用并不会阻塞直到请求结果返回才开始执行
 * 根据事件循环队列机制，首先将request请求添加到事件循环队列中，由于request是异步操作，
 * 所以当前request释放控制，将控制权移交给async，也就是说async执行。
 * 
 */