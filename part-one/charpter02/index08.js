
function create() {

  return new Promise(function(resolve, reject) {
    var result = Math.floor(Math.random() * 10);
    if (result % 2) {
      resolve(result);
    } else {
      reject('error');
    }
  });
}

create().then(function(res) {
  console.log('response ', res);
}).catch(function(err) {
  console.log('error ', err);
});