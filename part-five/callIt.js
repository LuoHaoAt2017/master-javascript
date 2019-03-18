function callIt(fn) {
  
  var args = [];
 
  const len = arguments.length;
  for(var i = 1; i < len; i++) {
    args.push(arguments[i]);
  }
  return fn.apply(this, args);
}

function calculate() {
  var sum = 0;
  const len = arguments.length;
  for (var i = 0; i < len; i++) {
    sum += arguments[i];
  }
  return sum;
}

const result = callIt(calculate, 1, 2, 3, 4);
console.log('result ', result);