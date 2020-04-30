console.log('main1'); // I/O 操作是宏任务

process.nextTick(function() {
    console.log('process.nextTick1'); // I/O 操作是宏任务
}); // nextTick是微任务

setTimeout(function() {
    console.log('setTimeout'); //I/O 操作是宏任务
    process.nextTick(function() { // nextTick是微任务
        console.log('process.nextTick2'); //I/O 操作是宏任务
    });
}, 0); // setTimeout宏任务

new Promise(function(resolve) {
    console.log('promise');
    resolve();
}).then(function() {
    console.log('promise then');
}); // Promise宏任务

console.log('main2'); // I/O 操作是宏任务
