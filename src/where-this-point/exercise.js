var name = 'ByteDance';

class A {
    constructor() {
      this.name = 123;
    }
    getA() {
        console.log(this);
        return this.name + 1;
    }
}

let a = new A();
let funcA = a.getA; // 绑定丢失
funcA(); //ByteDance

var length = 10;
function fn() {
    alert(this.length)
}
var obj = {
    length: 5,
    method: function (fn) {
        fn()            //10
        arguments[0]()  //1
    },
}
// 5
obj.method(fn);
