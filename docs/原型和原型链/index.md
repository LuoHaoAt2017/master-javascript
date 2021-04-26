#### 1.理解原型设计模式以及 JavaScript 中的原型规则

- 为什么需要原型  
  解决数据和方法共享问题。将某种特定类型的所有实例都需要的
  数据和方法提取到原型对象中，而不是每一个实例都维持一份。
  <br><br>
- 什么是原型  
  任何一个函数都有一个原型属性——prototype，这个 prototype 是一个指针。
  指向一个对象，这个对象中的静态数据和动态方法是所有基于这个原型的实例
  所共享的。
  <br><br>
- 如何使用原型对象  
  α: 构造函数，原型对象，实例三者之间的关系  
   构造函数上有一个 prototype 指针指向原型对象。
  原型对象上有一个 constructor 属性指向构造函数。
  实例对象上有一个私有的**proto**属性指向原型对象。

β: 读取实例对象的属性时发生了什么  
 首先在当前实例上查找，找到的情况下，直接返回。
找不到的情况下，去实例的原型对象上查找，找到的情况下，直接返回。
找不到的情况下，去原型的原型上去找，直到 object，找不到返回 undefined。

γ: 如何判断实例的类型  
 obj instanceof Func

δ: 如何阻止实例去访问原型上的某个特定的属性  
 在实例上定义一个和原型上同名的属性。那么原型上的属性就被屏蔽啦。

ε: 原型对象和 in 操作符。  
 in 可以作为单独的操作符使用，也可以和 for 结合起来使用。
如果一个属性是可枚举的，无论这个属性是直接定义在实例上，
还是定义在原型上，都可以通过 in 操作符访问到。

```
            var obj = {};
            function Foo() {this.y = 2;}
            Foo.prototype = obj;
            Object.defineProperty(obj, 'x', {
                configurable: true,
                enumerable: false,
                writable: true,
                value: 1
            });
            var foo = new Foo();
            for(var key in foo) {
                console.log(key);
            }
            console.log('x' in foo); // false
            console.log('y' in foo); // true
```

ζ: 如何判断一个属性是在实例对象上还是在原型对象上

```
            var obj = {x: 1};
            function Foo() {this.y = 2;}
            Foo.prototype = obj;
            var foo = new Foo();
            function hasOwnProperty(prop, obj) {
                if(prop in obj) {
                    if(foo.hasOwnProperty(prop)) {
                        console.log(prop, '在实例上');
                        return 1;
                    } else {
                        console.log(prop, '在原型上');
                        return -1;
                    }
                } else {
                    console.log(prop, '既不在实例上也不在原型上');
                    return 0;
                }
            }
            hasOwnProperty('x', foo);
            hasOwnProperty('y', foo);
            hasOwnProperty('z', foo);
```

η:  
θ:  
λ:  
μ:

#### 2.instanceof 的底层实现原理，手动实现一个 instanceof

```
function myInstanceof(obj, Func) {
    var proto = obj.__proto__;
    var target = Func.prototype;
    while(proto) {
        if (proto === target) {
            return true;
        }
        proto = proto.__proto__;
    }
    return false;
}
function Foo() {}
function Bar() {}
function Tom() {}
var foo = new Foo();
Bar.prototype = foo;
var bar = new Bar();
var tom = new Tom();
console.log(myInstanceof(bar, Bar));
console.log(myInstanceof(bar, Foo));
console.log(myInstanceof(tom, Tom));
console.log(myInstanceof(tom, Bar));
```

#### 3.实现继承的几种方式以及他们的优缺点

#### 4.至少说出一种开源项目中应用原型继承的案例

#### 5.可以描述 new 一个对象的详细过程，手动实现一个 new 操作符

#### 6.理解 es6 class 构造以及继承的底层实现原理
