//迭代器

const myIterator = (function() {

	let nextValue;
	return {
		[Symbol.iterator]: function() {
			return this;
		},
		next: function() {
			if (nextValue === undefined) {
				nextValue = 1;
			} else {
				nextValue = (3 * nextValue) + 6;
			}
			return {done: false, value: nextValue}
		}
	}
})();

console.log('item ', myIterator.next().value);
console.log('item ', myIterator.next().value);
console.log('item ', myIterator.next().value);
// for (let item of myIterator) {
// 	console.log('item ', item.next().value);
// }
