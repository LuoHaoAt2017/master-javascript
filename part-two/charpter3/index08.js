var promise1 = new Promise(function callabck(resolve, reject) {
  setTimeout(function() {
    resolve(Math.floor(Math.random()*10));
  }, 3000);
});

var promise2 = new Promise(function callabck(resolve, reject) {
  setTimeout(function() {
    resolve(Math.floor(Math.random()*10));
  }, 1000);
});

var promise3 = new Promise(function callabck(resolve, reject) {
  setTimeout(function() {
    resolve(Math.floor(Math.random()*10));
  }, 1000);
});

promise1.then(function onfulfilled(value) {
  promise1.then(function(value) {
    console.log('promise1 level one value: ', value);
  });
  console.log('promise1 level one value: ', value);
});

promise2.then(function onfulfilled(value) {
  promise2.then(function(value) {
    console.log('promise2 level two B value', value);
  });
  console.log('promise2 level two B value', value);
});

promise3.then(function onfulfilled(value) {
  promise3.then(function(value) {
    console.log('promise3 level two C value', value);
  });
  console.log('promise3 level two C value', value);
});

/**
 * 同一层级的promise之间的调用顺序也是不可预知的。
 * 有的网络请求时间长，有的网络请求时间短。
 */