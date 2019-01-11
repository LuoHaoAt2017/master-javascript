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
  remoteCall(url);
  clock.on('callback', function(err, res) {
    callback(err, res);
  });
}

function remoteCall(url) {
  console.log('Request data from ', url);
  setTimeout(function() {
    var err = guess(1) ? new Error('server error') : null;
    var res = 1;
    if (err) {
      clock.tick(err, null);
    } else {
      clock.tick(null, res);
    }
  }, 1000);
}

function asyncTimeout(func, delay) {
  var pid = setTimeout(function() {
    func(null, null, true);
  }, delay);
  return function(err, res) {
    if (pid) {
      func(err, res, null);
    }
  }
}

function callback(err, res, timeout) {
  console.log('Get response from sever.');
  if (timeout) {
    return -1;
  } else if (err) {
    console.log('error', err);
    return 1;
  } else {
    console.log('res', res);
    return 0;
  } 
}

//超过两秒没有返回结果就直接报错

request('http://localhost:8080/', asyncTimeout(callback, 000));

/**
 * 模拟超时调用报错
 */