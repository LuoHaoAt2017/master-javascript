//内建消息输入输出

let miles = 1000;

function *generator() {
	miles *= 2;
	console.log(yield nextWork());
	miles *= 2;
}

const gen = generator();
const res1 = gen.next();
console.log('res1 ', res1);
gen.next(5);

function nextWork() {
	return 'Hello World';
}

//yield next 双向消息传递。
//yield 的返回值是 next 传递进来的值。
//next 的返回值是yield 后面的函数的返回值。

//底层估计还是基于事件监听模式
