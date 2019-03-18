function partialUsingArguments(fn) {

  var args = Array.prototype.slice.call(arguments, 1);
  return function result() {
    return fn.apply(fn, args.concat([].slice.call(arguments)));
  }
}

function calculate() {
  var sum = 0;
  const len = arguments.length;
  for (var i = 0; i < len; i++) {
    sum += arguments[i];
  }
  return sum;
}

const result = partialUsingArguments(calculate, 1, 2, 3, 4)(5, 6, 7, 8, 9);
console.log('result ', result);