//多线程竞态环境

//共享变量
let z = 1;

function *consumer() {
	let x = yield 2;
	z++;
	let y = yield (x * z);
	console.log(x, y, z);
}

const consumer1 = consumer();
const consumer2 = consumer();

const res1 = consumer1.next().value;
const res2 = consumer2.next().value;
consumer1.next(2 * res1).value;
consumer2.next(2 * res2).value;
consumer1.next(2);
consumer2.next(2);
