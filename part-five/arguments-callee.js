
var gaussian = function() {

  const value = arguments[0];
  if (value === 0) {
    return 1;
  } else if (value === 1) {
    return 1;
  } else {
    return value + arguments.callee(value -1);
  }
}

console.log('gaussian ', gaussian(10));