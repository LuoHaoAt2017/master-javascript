/*
 * 模拟promise的底层实现机制
 * 一个异步调用分为两步，第一步是一个耗时的网络操作，
 * 这个操作怎么执行，不必关心。只需要关心它何时结束，
 * 以及结束时的状态(成功或者失败)。最核心的问题就是
 * 如何知道第一部分何时结束。这就要联想到事件监听机制。
 */
var util = require('util');
var EventEmitter = require('events').EventEmitter;

function SelfPromise(callback) {
  callback.call(this, success, failure);
}

SelfPromise.prototype.resolved = function(result) {
  this.emit('resolved', result);
}

SelfPromise.prototype.rejected = function(error) {
  this.emit('rejected', error);
}

util.inherits(SelfPromise, EventEmitter);

function success(value) {
  this.resolved(value);
}

function failure(error) {
  this.rejected(error);
}

function callback(success, failure) {
  setTimeout(() => {
    var odd = Math.floor(Math.random()*10) % 2;
    odd = true;
    if (odd) {
      var value = 123456789;
      //必须为success函数绑定SelfPromise上下文环境
      //因此需要在success内部调用SelfPromise对象的resolved方法。
      //实践出真知
      success.call(this, value);
    } else {
      var error = new Error('server error');
      failure.call(this, error);
    }
  }, 2000);
}

var promise = new SelfPromise(callback);

promise.on('resolved', function(result) {
  console.log('resolved: ', result);
});

promise.on('rejected', function(error) {
  console.log('rejected: ', error);
});