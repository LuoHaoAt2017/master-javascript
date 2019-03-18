//同一个promise的调用次序
//多次调用不改变promise的决议值
//promise的决议值如果确定那么多次调用的结果完全相同。

var promise = new Promise(function callabck(resolve, reject) {
  var flag = true;
  if (flag) {
    //promise决议完成后，触发resolved事件，promise会监听到。
    //监听resolved事件的方法也就是then()方法的第一个参数。
    resolve(Math.floor(Math.random()*10));
  } else {
    reject(Math.floor(Math.random()*10));
  }
});

promise.then(function onfulfilled(value) {
  promise.then(function(value) {
    console.log('level two A value', value);
  });
  console.log('level one A value: ', value);
});

promise.then(function onfulfilled(value) {
  promise.then(function(value) {
    console.log('level two B value', value);
  });
  console.log('level one B value: ', value);
});

promise.then(function onfulfilled(value) {
  promise.then(function(value) {
    console.log('level two C value', value);
  });
  console.log('level one C value: ', value);
});