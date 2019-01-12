function fetchX() {
  console.log('async get x ...');
  return new Promise(function(resolved, rejected) {
    setTimeout(function() {
      var flag = Math.floor(Math.random()*10) > 1 ? true : false;
      if (flag) {
        resolved(1);
      } else {
        rejected(new Error('server error'));
      }
    }, 1000);
  });
}

function fetchY() {
  console.log('async get y ...');
  return new Promise(function(resolved, rejected) {
    setTimeout(function() {
      var flag = Math.floor(Math.random()*10) > 1 ? true : false;
      if (flag) {
        resolved(2);
      } else {
        rejected(new Error('server error'));
      }
    }, 2000);
  });
}

function add(xPromise, yPromise) {
  return Promise.all([xPromise, yPromise]).then(function(values) {
    return values[0] + values[1];
  }, function(error) {
    console.log(error);
  });
}

add(fetchX(), fetchY()).then(function(sum) {
  console.log('x plus y is ', sum);
});

/**
 * 事件监听机制完成控制反转
 */