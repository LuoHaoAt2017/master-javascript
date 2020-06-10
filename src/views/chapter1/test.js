function A() {

}

function B() {

}

const a = new A();
a.__proto__ = B.prototype;

// typeof 
console.log(typeof a);
// instanceof 
console.log(a instanceof B);
// constructor 
console.log(a.constructor);
// toString 
console.log(Object.prototype.toString(a));