function createPerson(name, age) {
    let obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.say = function() {
        console.log('name', obj.name);
    }
    return obj;
}

const person1 = createPerson('tom', 26);
const person2 = createPerson('jim', 27);

person1.say();
person2.say();

if(person1 instanceof Object && person2 instanceof Object) {
    console.log('经由createPerson创建的对象的类型都是Object');
}
