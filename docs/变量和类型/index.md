### 1.JavaScript规定了几种语言类型

基础数据类型
- String
- Number
- Boolean
- Undefined
- Null
- Symbol

引用数据类型
- Object

基础类型和引用类型的区别
- 存储在什么位置
- 值是否可以改变
- 赋值时发生了什么
- 是否可以添加属性
- 值与值的比较

疑问：基本数据类型，不应该有方法，那为什么这里字符串可以调用substring()
基本包装类型
ECMAScript还提供了三个特殊的引用类型Boolean,String,Number.
我们称这三个特殊的引用类型为基本包装类型，也叫包装对象.
也就是说当读取string,boolean和number这三个基本数据类型的时候，
后台就会创建一个对应的基本包装类型对象，从而让我们能够调用一些方法来操作这些数据.
所以当第二行代码访问s1的时候，后台会自动完成下列操作：

- 创建String类型的一个实例；// var s1 = new String("helloworld");
- 在实例上调用指定方法；// var s2 = s1.substr(4);
- 销毁这个实例；// s1 = null;

判断JS数据类型的方法

- typeof
对于基本类型，除null以外，均可以返回正确的结果。
对于引用类型，除function以外，一律返回 object 类型。
对于null，返回object类型。
对于function 返回function类型。

- instanceof

- constructor
```
function A() {}
function B() {}
const a = new A();
console.log('constructor1', a.constructor);
a.__proto__ = B.prototype;
console.log(a instanceof B);
console.log('constructor2',a.constructor);
```
constructor1的结果是```[Function: A]```
为什么constructor2的结果是```[Function: B```
对象a自身并没有constructor属性，constructor属性
来自于原型。当通过a.__proto__ = B.prototype;
改变原型后，再次获取constructor时，此时的constructor
指向的就是[Function: B]。这一切的核心就是一句话：
对象a自身并没有constructor属性，constructor属性
来自于原型。

- toString
Object.prototype.toString.call(target)
[object, xxx]

### 2.JavaScript对象的底层数据结构是什么


### 3.Symbol类型在实际开发中的应用、可手动实现一个简单的Symbol


### 4.JavaScript中的变量在内存中的具体存储形式


### 5.基本类型对应的内置对象，以及他们之间的装箱拆箱操作


### 6.理解值类型和引用类型


### 7.null和undefined的区别
undefined 表示一个变量最原始的状态值。
null 则表示一个变量被人为的设置为空对象。

声明了一个变量，但没有赋值。undefined
访问对象上不存在的属性。undefined
函数定义了形参，但没有传递实参。undefined

### 8.至少可以说出三种判断JavaScript数据类型的方式，以及他们的优缺点，如何准确的判断数组类型


### 9.可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用


### 10.出现小数精度丢失的原因，JavaScript可以存储的最大数字、最大安全数字，JavaScript处理大数字的方法、避免精度丢失的方法

