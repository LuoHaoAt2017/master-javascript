var util = require('util');

var EventEmitter = require('events').EventEmitter;

function resolve(value) {
  this.resolved(value);
}

function reject(error) {
  this.rejected(error);
}

function callback(resolve, reject) {
  //必须写成箭头函数的形式否则this的指向就会改变
  setTimeout(()  => {
    var value = Math.floor(Math.random() * 10);
    var flag = true;
    if (flag) {
      resolve.call(this, value);
    } else {
      reject.call(this, new Error('error'));
    }
  }, 1000);
  /**
   * callback必须是异步调用，绝对不可以是同步调用。
   * 因为使用的是传统的回调模式处理异步程序而不是promise，
   * 它就难以避免callback已经将事件触发了，但是还没有注册监听函数
   * 结果就是触发的事件没有被监听到或者说事件丢失。
   * 
   * 在这个地方调试了很久。
   */
}

function SelfPromise(callback) {
  /**
   * 你在此处调用resolve，问题是resolve从哪里来的呢？
   * 此处的resolve应该是全局的resolve方法名。
   */
  callback.call(this, resolve, reject);
}

util.inherits(SelfPromise, EventEmitter);

SelfPromise.prototype.resolved = function(result) {
  this.emit('resolved', result);
}

SelfPromise.prototype.rejected = function(error) {
  this.emit('rejected', error);
}

SelfPromise.prototype.then = function(resovled, rejected) {
  this.on('resolved', function(result) {
    resovled(result);
  });
  this.on('rejected', function(error) {
    rejected(error);
  });
}

var promise = new SelfPromise(callback);

promise.then(function(result) {
  console.log('result ', result);
}, function(error) {  
  console.log('error ', error);
});

promise.then(function(result) {
  console.log('result ', result);
}, function(error) {  
  console.log('error ', error);
});
