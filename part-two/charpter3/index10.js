
function normalPromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(1);
    }, 3000);
  });
}

function timeoutPromise(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject('timeout');
    }, delay);
  });
}

var promise = Promise.race([normalPromise(), timeoutPromise(1000)]);

promise.then(function() {
  console.log('resolved');
}, function() {
  console.log('rejected');
});

/**
 * 如果一个决议长久不决，那么应该报超时错误。
 * 回忆不采用promise而采用原始回调的机制去处理异步问题，
 * 遇到超时问题又是采取怎样的机制去解决问题的。
 * 从这种对比中我们的确可以体会到promise的优势。
 */