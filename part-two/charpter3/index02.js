var request = require('request');

var url = 'http://localhost:8080';

request(url, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

/**
 * 借这个例子说一下回调存在的控制反转问题。
 * 回调函数是request方法的第二个参数，request是第三方插件。
 * 
 * 将回调函数传递给request，那么回调函数的执行
 * 取决于request，request调用或者不调用，什么时候调用
 * 调用多少次，你都无法控制。因为request仅仅给你提供一个接口。
 * 因此，此时程序的执行控制就交给了request这个插件。
 * 程序控制权不在你手上而在第三方插件那里。这就是控制反转。
 * 
 * Promise的任务就是将回调函数的控制权拿回来，回调函数怎么执行
 * 完全由程序开发人员决定而不是由第三方插件决定。
 * 问题是什么决定了回调函数的执行方式，这就是异步函数的前部分的
 * 执行情况，执行成功或者执行失败。因此，promise必须告知程序员
 * 异步的前部分执行情况。开发人员根据前部分的执行情况来决定异步
 * 的后半部分如何执行。
 * 
 * 说了这么多，只是想说为什么需要promise，为什么传统的回调存在问题。
 */