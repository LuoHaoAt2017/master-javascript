var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Clock() {}

function guess(nums) {
  return Math.floor(Math.random() * 10) < nums ? true : false;
}

Clock.prototype.tick = function(err, res) {
  this.emit('callback', err, res);
}

util.inherits(Clock, EventEmitter);

var clock = new Clock();

function request(url, callback) {
  console.log('请求发起');
  //模拟远端服务器处理请求
  remoteCall(url);
  //模拟本地客户端监听服务器的响应
  clock.on('callback', function(err, res) {
    callback(err, res);
  });
}

function remoteCall(url) {
  console.log('Request data from server ', url);
  setTimeout(function() {
    //设置服务器存在10%的可能性会导致处理错误。
    console.log('服务器处理数据');
    var err = guess(1) ? new Error('服务器处理错误') : null;
    var res = 1;
    clock.tick(err, res);
  }, 1000);
}

function asyncTimeout(func, delay) {
  console.log('异步回调函数开始调用');
  var pid = setTimeout(function() {
    console.log('超时将pid置为空');
    pid = null;
  }, delay);

  return function(err, res) {
    console.log('函数式编程');
    if (pid) {
      func(err, res);
    } else {
      func(new Error('超时错误'), null);
    }
  }
}

function callback(err, res) {
  console.log('Get response from sever.');
  if (err) {
    console.log('error', err);
  } else {
    console.log('res', res);
  }
}

//超过两秒没有返回结果就直接报错
request('http://localhost:8080/', asyncTimeout(callback, 2000));

/**
 * 模拟超时调用报错
 */