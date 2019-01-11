function async() {
  setTimeout(function() {
    console.log('====================');
  }, 1000);
  console.log('********************');
};

setTimeout(function() {
  console.log('&&&&&&&&&&&&&&&&&&&&');
}, 1000);

async();

/*
********************
&&&&&&&&&&&&&&&&&&&&
====================
*/