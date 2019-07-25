var obj1 = {
  username: 'luohao',
  password: '123456'
}

var obj2 = JSON.stringify(obj1);
console.log('obj2 ', obj2);
var obj3 = JSON.parse(obj2);
console.log('obj3 ', obj3);
var obj4 = JSON.parse(obj3);
console.log('obj4 ', obj4);