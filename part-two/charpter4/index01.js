//看似同步的异步编程风格 --- generator

//一般情况下我们会以为一个函数一旦开始执行就会从头执行到尾。
//函数在执行的过程中外界无法干预它的执行，但是现在情况发生了改变。
let miles = 1000;

function *generator() {
	miles *= 2;
	yield;
	miles *= 2;

}

//generator()并不是执行而仅仅只是根据构造函数生成一个构造器
const gen = generator();
console.log(gen.next());
console.log('miles ', miles);
console.log(gen.next());
console.log('miles ', miles);
