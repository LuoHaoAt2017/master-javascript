// 构造函数，函数原型，实例三者
// 构造函数的prototype指向它的原型
// 实例的__proto__指向它的原型
// 原型的constructor指向构造函数

// 1. 对象有__proto__属性，函数有prototype属性；
// 2. 对象由函数生成;
// 3. 生成对象时，对象的__proto__属性指向函数的prototype属性。
// 4. Object.__proto__ === Object.prototype (Object是构造函数，另外Object也是函数对象)
// 5. Function.__proto__ === Object.prototype
// 6. 函数默认的prototype是一个类型为"object"的对象，它有两个属性：constructor和 __proto__。

// 原型存在继承性
function myInstanceof(origin, target) {
    while(origin) {
        if (origin.__proto__ === target.prototype) {
            return true;
        }
        origin = origin.__proto__;
    }
    return false;
}

function Geometry() {

}

function Circle() {

}

function Wheel() {

}

// 指定原型链
Circle.prototype = Geometry.prototype;
Wheel.prototype = Circle.prototype;

const wheel = new Wheel();
console.log(wheel.__proto__ instanceof Function);
console.log(wheel.__proto__ instanceof Object);
console.log('Object.prototype: ', Object.prototype);
console.log('Circle.prototype: ', Circle.prototype);
console.log('Wheel.prototype: ', Wheel.prototype);

console.log('wheel instanceof Wheel: ', myInstanceof(wheel, Wheel));
console.log('wheel instanceof Circle: ', myInstanceof(wheel, Circle));
console.log('wheel instanceof Geometry: ', myInstanceof(wheel, Geometry));
console.log('wheel instanceof Object: ', myInstanceof(wheel, Object));
console.log('wheel instanceof Geometry: ', wheel instanceof Geometry);
