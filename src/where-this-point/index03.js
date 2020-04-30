// import Vue from 'vue'
// import App from './App.vue'
//
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
window.length = 10;
window.name = 'ByteDance';

class A {
	constructor() {
		this.name = 123;
	}
	getA() {
		console.log(this);
		return this.name + 1;
	}
}

let a = new A();
let funcA = a.getA; // 绑定丢失
// funcA();            // 严格模式下this是undefined获取不到

function fn() {
	console.log(this.length);
}

var obj = {
	length: 5,
	method: function (fn) {
		// 将函数作为参数传递
		fn();  //10

		// arguments[0]其实就是fn，此时fn是arguments的属性，在fn内部的this指向的就是arguments,
		// this.length 就是 arguments.length，arguments.length就是参数的个数也就是1。
		arguments[0]();  //1
	},
};

// 5
// obj.method(fn);

//当函数作为独立函数调用，this指向全局对象。
const x = 1;
const foo = {
	x: 1,
	y: 1,
	test: function () {
		const aaa = function () {
			console.log(this.x);
		};
		// 在一个方法内部调用
		aaa();
	}
};

// foo.test();

//
window.r = 123;
const abc = {
	r: 12,
	test: function () {
		setTimeout(() => {
			// 箭头函数内部的this和箭头函数外部的this指向一致
			// 所以this指向abc
			console.log(this.r);
		});
	},
	oppo: function () {
		// setTimeout是window上的属性，因此setTimeout内部
		// this指向全局window
		setTimeout(function () {
			console.log(this.r);
		});
	}
};
abc.test();
abc.oppo();
