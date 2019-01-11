var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Clock() {}

Clock.prototype.tick = function(err, res) {
  this.emit('callback', err, res);
}

util.inherits(Clock, EventEmitter);

var clock = new Clock();

//======================================================

//模拟网络HTTP请求和回调函数的处理，如果网络请求超时，那么取消回调。
function request(url, backCall) {
  /**
   * 精巧的设计，直到网络请求返回数据才调用回调函数。
   */
  remoteCall(url);
  clock.on('callback', function(err, res) {
    backCall(err, res);
  });
}

function remoteCall(url) {
  console.log('Request data from server ', url);
  setTimeout(function() {
    var err = null;
    var res = 1;
    clock.tick(err, res);
  }, 1000);
}

request('http://localhost:8080/', function(err, res) {
  console.log('Get response from sever.');
  if (err) {
    console.log('error', err);
  } else {
    console.log('res', res);
  }
});

/**
 * 模拟网络请求  ===> 十分重要的大作业
 * 模拟插件 过早调用回调 过晚调用回调，过多调用回调。
 */    