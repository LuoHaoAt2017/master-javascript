function funcA(func) {
  console.log('function A run!');
  func();
}

function funcB() {
  console.log('function B run!');
}

function funcC(func) {
  console.log('function C run!');
  func();
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
 * 运行的顺序又是什么？为什么。
 */