// 1. 创建一个空对象
// 2. 将对象的__proto__属性指向构造函数的原型对象
// 3. 将构造函数内部的this指向新创建的对象
// 4. 执行构造函数
// 5. 返回新创建的对象

function createNew(func, ...args) {
    const obj = Object.create(func.prototype); // 第一步第二步合为一步
    const ret = func.apply(obj, args);         // 第三步第四步合为一步
    return ret ? ret : obj;                    // 第五步
}

function Person(username, password) {
    this.username = username; // this指向基于原型对象创建的实例obj
    this.password = password; // this指向基于原型对象创建的实例obj
    return this;
}

Person.prototype.say = function() {
    console.log('username: ', this.username);
    console.log('password: ', this.password);
}

const person = createNew(Person, 'luohao', '123456');

person.say();
