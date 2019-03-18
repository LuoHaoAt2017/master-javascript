var promise = new Promise(function(resolve, reject) {

});

promise.then(function() {
  console.log('resolved');
}, function() {
  console.log('rejected');
});

/**
 * 如果不决议那么情况似乎并不乐观
 */