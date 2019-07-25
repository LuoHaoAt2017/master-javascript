var user = require('./index10');

user.password = '12345';

setInterval(function() {
  console.log('user', user);
}, 6000);