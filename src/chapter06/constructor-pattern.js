// 构造函数始终以大写字母开头
// 构造函数的功能是用来创建对象实例不是用来实现功能的
// 构造函数内部的this指向实例本身
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
        console.log('name', this.name, ', age: ', this.age);
    }
}

// 使用构造函数创建实例的方式是new
const person1 = new Person('tom', 26);
const person2 = new Person('jim', 27);

if (person1 instanceof Object && person2 instanceof Object) {
    console.log('person1, person2的类型都是Object类型');
}

if (person1 instanceof Person && person2 instanceof Person) {
    console.log('person1, person2的类型都是Person类型');
}

// 构造函数也是函数，普通函数和构造函数没有任何区别，都是函数。
// 决定一个函数是普通函数还是构造函数的唯一依据是是否使用new操作符。
// 一个函数只要使用了new操作符那么它就被当作构造函数。

// 假设我们不以构造函数的方式使用Person而仅仅将它当作普通的函数。

// Person内部的this指向全局对象
Person('tim', 24);
console.log('name: ', global.name, ' age: ', global.age);
const boy = new Object();

// Person内部的this指向boy
Person.call(boy, 'ATM', 24);
console.log('name: ', boy.name, ' age: ', boy.age);

