/**
 * 回调的次数不符合规范的一次
 */

var promise = new Promise(function(resolve, reject) {
  resolve(1);
});

promise.then(function() {
  console.log('resolved 1');
}, function() {
  console.log('rejected 1');
});

promise.then(function() {
  console.log('resolved 2');
}, function() {
  console.log('rejected 2');
});

/**
 * 如果一个决议长久不决，那么应该报超时错误。
 * 回忆不采用promise而采用原始回调的机制去处理异步问题，
 * 遇到超时问题又是采取怎样的机制去解决问题的。
 * 从这种对比中我们的确可以体会到promise的优势。
 */

/***
 * 一旦决议结果确定了，那么无论你调用多少次回调函数，
 * 引用的决议结果是不会改变的。
 * 
 * promise理论上调用一次
 * 过少调用也就是没有调用，
 * 过多也就是超过一次，
 * 如果为一个promise注册多次resolve和reject回调
 * 那么，promise的回调就会调用多次。
 */