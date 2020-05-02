
const obj = new Object();
let obj1 = obj;
let obj2 = obj;
// 两个引用是否指向同一块内存
console.log('obj1 === obj2: ', obj1 === obj2);
console.log('obj1 === obj2: ', Object.is(obj1, obj2));