/*
 * 模拟promise的底层实现机制
 * 一个异步调用分为两步，第一步是一个耗时的网络操作，
 * 这个操作怎么执行，不必关心。只需要关心它何时结束，
 * 以及结束时的状态(成功或者失败)。最核心的问题就是
 * 如何知道第一部分何时结束。这就要联想到事件监听机制。
 */
var util = require('util');

var EventEmitter = require('events').EventEmitter;

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

function SelfPromise(callback) {
  //实例化对象
  //这里要对this进行显示绑定
  //在构造函数内部this指向哪里？全局对象或者实例化对象？
  callback.call(this, success, failure);
}

SelfPromise.prototype.resolved = function(result) {
  //这里的this就是实例化的SelfPromise对象
  this.emit('resolved', result);
}

SelfPromise.prototype.rejected = function(error) {
  this.emit('rejected', error);
}

SelfPromise.prototype.then = function(resovled, rejected) {
  //将this 绑定到具体的实例上，这里的this是隐式调用，
  //this是promise实例上的方法，所以this就是promise实例。
  this.on('resolved', function(result) {
    resovled(result);
  });
  this.on('rejected', function(error) {
    rejected(error);
  });
}

util.inherits(SelfPromise, EventEmitter);

var promise = new SelfPromise(callback);

promise.then(function(result) {
  console.log(result);
}, function(error) {  
  console.log(error);
});

/**
 * 完美定调
 */

function testPromise(obj) {
  if (obj && (obj instanceof Object || obj instanceof Function) && obj.then instanceof Function) {
    console.log('obj is a promise');
  } else {
    console.log('obj is not a promise');
  }
}

testPromise(promise);
testPromise({a: 21});