function Person() {}

Person.prototype = {
    name: 'nickname',
    job: 'FrontEndEngineer',
    intro: function() {
        console.log('name: ', this.name);
    }
}

const person1 = new Person();
const person2 = new Person();
// person1.intro();
// person2.intro();

Person.prototype.name = 'fullname';
person1.intro();
person2.intro();

// person1的实例访问的name不是原型的name而是实例为自己创建的name,
// 当实例的属性和原型的属性重名的时候，原型的属性被隐藏。
person1.name = 'nickname';
person1.intro();
person2.intro();

// person1.prototype.name的形式来访问原型
// 只有理解了原型链才能够快速理解为什么不能够

// 可以通过实例访问原型上的值，但是无法通过实例修改原型上的值。

// 如何阻止实例访问其原型上的属性？
// 在实例中创建一个同名的原型属性。这样原型中的属性就被屏蔽了。
// 可以使用delete obj.prop的方式恢复对原型属性的访问。

// 几个重要的原型方法
// 获取实例的原型：Object.getPrototypeOf(instance)

// 如何判断一个属性是实例的还是原型的呢？
// 根据in操作符的结果可以判断实例能否访问到属性。
// instance.hasOwnProperty(prop)判断属性是在实例上还是在原型上。
// for...in...循环中访问到的属性是可枚举的
// 如果将对象的enumerable特性设置为false，那么无法在for...in...循环中访问到。

// 获取一个实例上的属性 Object.keys(obj)，获取不到原型上的属性;
function Animal() {
    this.a = 1;
    this.b = 2;
    this.c = 3;
}

Animal.prototype = {
    x: 1,
    y: 1,
    z: 1,
    r: {
        d: 1
    }
}

const dog = new Animal();
console.log(Object.keys(dog).join(', '));
console.log(Object.keys(Animal.prototype).join(', '));

// 原型重写的问题

// 原型的问题：原型中的引用属性可能会被实例修改
const cat = new Animal();
cat.r.d = 2;
console.log('dog: ', dog.r.d);
console.log('cat: ', cat.r.d);

// 将构造函数模式和原型模式想结合
// 私有属性放在构造函数中
// 公共属性放在原型中