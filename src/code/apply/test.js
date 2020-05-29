var obj = {
	x: 1
};

var foo = {
	x: 2
};

function say() {
	console.log('x: ', this.x);
}

say.apply(obj);
say.apply(foo);
