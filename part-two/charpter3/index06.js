//使用promise

console.log('==============================');

new Promise(function callabck(resolve, reject) {
  var flag = true;
  if (flag) {
    //promise决议完成后，触发resolved事件，promise会监听到。
    //监听resolved事件的方法也就是then()方法的第一个参数。
    resolve(12);
  } else {
    reject(43);
  }
}).then(function onfulfilled(value) {
  console.log('value: ', value);
}, function onrejected(error) {
  console.log('error', error);
});

console.log('******************************');

/**
 * 对一个promise调用then的时候，
 * 即使resolve决议已经完成了，对它的调用仍然是异步的。
 */