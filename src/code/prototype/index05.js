const person = {
    shape: ['circle'],
    color: 'green'
}

// 先天的原型式继承
// 浅拷贝，对基本类型采取值拷贝，对对象类型采取引用拷贝。
const p = Object.create(person);
const q = Object.create(person);
p.color = 'blue';
p.shape.push('rectangle');
console.log(p.color);
console.log(q.color);
console.log(p.shape);
console.log(q.shape);

Object.prototype.father = function(obj) {
    const F = function() {};
    F.prototype = obj;
    return new F();
}

const dog = {
    color: 'red',
    features: ['age']
}

// 自定义版本的Object.create()
// 基于已有的对象a创建一个新对象b。
// b通过原型继承自a对象
const tom = Object.father(dog);
const jim = Object.father(dog);
tom.color = 'green';
tom.features.push('eye');
console.log(tom.color, tom.features);
console.log(jim.color, jim.features);
