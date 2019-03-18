function count(start, end) {
    
  console.log(start++);
  var pid = setInterval(function() {
      if (start <= end) {
          console.log(start++);
      } else {
        clearInterval(pid);
      }
  }, 100);
  return {
    cancel: function() {
      clearInterval(pid);
    }
  }
}

function count(start, end) {
  console.log(start++);
  var timer = setInterval(function () {
      if (start <= end) {
          console.log(start++)
      } else {
          clearInterval(timer)
      }
  }, 100);
  return {
      cancel: function () {
          clearInterval(timer)
      }
  }
}