function funcA(func) {
  console.log('function A run!');
  setTimeout(function() {
    func();
  }, 1000);
}

function funcB() {
  console.log('function B run!');
}

function funcC(func) {
  console.log('function C run!');
  setTimeout(function() {
    func();
  }, 1000);
}

function funcD() {
  console.log('function D run!');
}

function funcE() {
  console.log('function E run!');
}

function funcF() {
  console.log('function F run!');
}

funcA(function() {
  funcB();
  funcC(function() {
    funcD();
  });
  funcE();
});

funcF();

/**
 * 运行的顺序是什么？为什么。
 * 队列的遍历
 */

/**
 * 函数内部代码时顺序执行
 * 函数之间由于存在异步，执行顺序就不确定
 */