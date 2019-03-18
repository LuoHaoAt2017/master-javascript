function base10(str) {
    
  var nums = str.split('');
  var sum = 0, len = nums.length;
  for (var i = 0; i < len; i++) {
      var cur = Number(nums[i]);
      if (cur === 1) {
          sum += Math.pow(2, (len-i-1));
      }
  }
  return sum;
}
