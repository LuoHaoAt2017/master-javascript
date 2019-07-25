//迭代器

//从生产者那里一步一步得到下一步的值。
const list = [1, 2, 3, 4, 5, 6];

for (let item of list) {
	console.log(item);
}

//es6语法方可 es6转码器。
const it = list[Symbol.iterator]();
it.next().value;
it.next().value;
it.next().value;
