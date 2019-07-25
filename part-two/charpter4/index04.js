//多线程竞态环境

let a = 1, b = 2;

function *foo() {
	a++;
	yield;
	b = b * a;
	a = (yield b) + 3;
}

function *bar() {
	b--;
	yield;
	a = (yield 8) + b;
	b = a * (yield 2);
}

function step(gen) {
	const it = gen();
	let last;
	return function () {
		last = it.next(last).value;
	}
}

const s1 = step(foo());
const s2 = step(bar());

s1(); //a = 2, b = 2;
s1(); //a = 2, b = 4;
s1(); //a = 7, b = 4;

s2(); //a = 7, b = 3;
s2(); //a = 7, b = 3;
s2(); //a = 11, b = 3;
s2(); //a = 11, b = 22;
