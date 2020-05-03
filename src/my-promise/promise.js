// Promise是一个构造函数
// 构造函数接收一个参数，这个参数是一个函数。
// 这个函数又接收两个参数resolve和reject。
// resolve和reject由js引擎提供。

// resolve在异步操作成功时调用，将promise的状态由pending改成resolved。
// resolve函数接收一个参数，这个参数往往就是异步操作成功的结果。

// reject在异步操作失败时调用，将pending的状态由pending改成rejected。
// reject函数接收一个参数，这个参数往往就是错误信息。

const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve(1);
        } else {
            reject(0);
        }
    }, 1000);
});

// promise.then(callbacks)
// 当promise状态改变时的回调
// 第一个callback是resolved时的回调
// 第二个callback是rejected时的回调
promise.then(function onresolved(res) {
    console.log('then1: ', res);
}, function onrejected(res) {
    // 不推荐使用onrejected，
    // 推荐使用promise.catch。
    console.log('then2: ', res);
});

// promise前半段如果在执行过程中发生错误
// 抛出的异常会被catch捕获，执行回调函数
promise.catch(function(err) {
    console.log('err1: ', err);
}, function(err) {
    console.log('err2: ', err);
});