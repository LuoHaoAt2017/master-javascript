function valueAtBit(num, bit) {
  var remainders = [], counter = 0;
  
  do {
      remainders[counter] = num % 2;
      num = Math.floor(num / 2);
      counter++;
  }while (num > 0);
  return remainders[bit-1];
}
