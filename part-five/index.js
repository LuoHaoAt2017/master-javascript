function useArguments() {
  var sum = 0;
  const len = arguments.length;
  for (var i = 0; i < len; i++) {
    sum += arguments[i];
  }
  return sum;
}

const result = useArguments(1, 2, 3, 4);
console.log('result ', result);