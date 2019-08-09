//有三个异步请求，在不使用异步工作库的情况下，如何做到让三个请求依次执行完毕。

const requests = {
  "aaa": "api/aaa",
  "bbb": "api/bbb",
  "ccc": "api/ccc",
}

const promise = function(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("模拟远程请求");
      resolve(url);
    }, 1000);
  });
}

function go() {
  let counter = 0;
  const keys = Object.keys(requests);
  const N = keys.length;

  const next = function(key) {
    promise(requests[key]).then(res => {
      console.log(res + " complete");
      if (++counter < N) {
        next(keys[counter]);
      }
    });
  }

  next(keys[counter]);
}

go();