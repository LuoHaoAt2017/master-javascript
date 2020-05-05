// 当在 then() 方法中返回一个 Promise，
// p1 的第二个完成处理函数就会挂在返回的这个 
// Promise 的 then() 方法下，因此输出顺序如下。
const p1 = new Promise((resolve) => {
  console.log('promise1'); // 1
  resolve();
}).then(() => {
    console.log('then11'); // 2
    return new Promise((resolve) => {
        console.log('promise2'); // 3
        resolve();
    }).then(() => {
        console.log('then21'); // 4
    }).then(() => {
        console.log('then23'); // 5
    });
}).then(() => {
    console.log('then12'); //6
});
