
function convertToBinary(num) {
  var list = [], index = 0;
  while (num > 0) {
      list[index++] = num % 2;
      num = Math.floor(num / 2);
  }
  while (index < 8) {
      list[index++] = 0;
  }
  var result = '';

  list.reverse().forEach(function(elem) {
    result += elem;
  });

  return result;
}