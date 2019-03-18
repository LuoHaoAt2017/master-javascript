var promise1 = new Promise(function(resove, reject) {
  print.log(' i have a pen.');
  resove(obj);
}).then(function(result) {
  console.log('result', result);
}, function rejected1(error) {
  //console.error('error ===>', error);
});

/**
 * 决议值只能有一个，第一个之后的决议值都取消。
 * 为了传递多个决议值需要将多个决议值封装成一个对象。
 */

var promise2 = new Promise(function(resove, reject) {
  resove('obj');
}).then(function resolved1(result) {
  print.log(' i have a pen.');
}, function rejected2(error) {
  console.error('error ===>', error);
}).then(function() {

}, function rejected3(error) {

});

/**
 * 可以看到虽然根本就没有print.log()，但是程序并没有报错。
 * 或者说产生的错误被吃掉了。
 * promise1产生的引用错误被rejected1捕获到，但是并没有处理。
 * 所以没有报出错误。
 * resolved1产生的引用错误应该被rejected3捕获而不是rejected2
 * 捕获到。
 * 
 * promise一旦决议就不应该改变，事实上也不会再次改变。
 * 
 * promise并没有完全摆脱回调，传统的方式是将回调函数直接传递给函数
 * 由函数决定回调函数如何调用。但是promise使用的方式不大一样。它是
 * 得到promise的监听器然后将监听函数传递给监听器。
 * 
 */