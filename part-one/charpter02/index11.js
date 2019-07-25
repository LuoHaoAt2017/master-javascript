var user = require('./index10');

user.username = 'wuhan';

setInterval(function() {
  console.log('user', user);
}, 3000);