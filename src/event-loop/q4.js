// async 异步
new Promise((resolve) => {
    console.log('网络请求中...');
    setTimeout(() => {
        resolve();
    }, 0);
}).then(() => {
    console.log('请求结束');
});

console.log('aaa');
console.log('bbb');
console.log('bbb');
console.log('ccc');
console.log('ddd');
console.log('eee');
