function A() {

}
function B() {

}
const a = new A();
console.log(a.constructor);
a.__proto__ = B.prototype;
console.log(a instanceof B);
console.log(a.constructor);
