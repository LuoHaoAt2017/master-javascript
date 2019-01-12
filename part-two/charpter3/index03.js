function add(asyncGetX, asyncGetY, callback) {
  var x, y;
  asyncGetX(function(xValue) {
    x = xValue;
    if(y != undefined) {
      callback(x + y);
    }
  });
  asyncGetY(function(yValue) {
    y = yValue;
    if (x != undefined) {
      callback(x + y);
    }
  });
}

function asyncGetX(func) {
  console.log('async get x ...');
  setTimeout(function() {
    var x = 1;
    func(x);
  }, 1000);
}

function asyncGetY(func) {
  console.log('async get y ...');
  setTimeout(function() {
    var y = 2;
    func(y);
  }, 2000);
}

add(asyncGetX, asyncGetY, function(sum) {
  console.log('x plus y is ', sum);
});

/**
 * 闭包的伟大之处
 */