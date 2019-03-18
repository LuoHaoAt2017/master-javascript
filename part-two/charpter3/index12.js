new Promise(function(resove, reject) {
  resove(1, 2);
}).then(function(first, second) {
  console.log('first', first);
  console.log('second', second);
}, function(error) {
  console.log('error', error);
});

new Promise(function(resove, reject) {
  var obj = {
    username: 'luohao',
    password: '123456'
  }
  resove(obj);
}).then(function(result) {
  console.log('result', result);
}, function(error) {
  console.log('error', error);
});

/**
 * 决议值只能有一个，第一个之后的决议值都取消。
 * 为了传递多个决议值需要将多个决议值封装成一个对象。
 */