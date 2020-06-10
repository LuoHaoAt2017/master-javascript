function A() {
	this.circle = {
		x: 0,
		y: 0,
		z: 0
	}
}

A.prototype.print = function () {
	const circle = this.circle;
	Object.keys(circle).forEach(elem => {
		console.log(elem, circle[elem]);
	});
	console.log('--------------------');
};

const a1 = new A();
const a2 = new A();
const a3 = new A();

a1.circle.x = 1;
a2.circle.y = 1;
a3.circle.z = 1;

a1.print();
a2.print();
a3.print();
