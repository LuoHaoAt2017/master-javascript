/**
 * callback and promise
 */

A('I fuck you', function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

function A(word, callback) {

  console.log('in a function');
  B(word, function(err, res) {
    console.log('in a function');
    callback(err, res);
  });
}

function B(word, callback) {

  console.log('in b function');
  C(word, function(err, res) {
    console.log('in b function');
    callback(err, res);
  });
}

function C(word, callback) {
  
  console.log('in c function');
  setTimeout(() => {
    console.log('in c function');
    callback(null, word);
  }, 1000);
}