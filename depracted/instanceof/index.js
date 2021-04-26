function Person() {

}

function Man() {

}

function Woman() {

}

function myinstanceof(obj, Func) {
    if (!obj) {
        return false;
    }
    if (obj.__proto__ === Func.prototype) {
        return true;
    } else {
        return myinstanceof(obj.__proto__, Func);
    }
}

// 原型是对象，原型是对象，原型是对象。
Man.prototype = new Person();
const man = new Man();
const woman = new Woman();

console.log('man instanceof Man: ', man instanceof Man);
console.log('man instanceof Person: ', man instanceof Person);

console.log('man instanceof Man: ', myinstanceof(man, Man));
console.log('man instanceof Man: ', myinstanceof(man, Person));
console.log('woman instanceof Person: ', myinstanceof(woman, Person));