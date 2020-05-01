
// bind函数改变一个函数的上下文执行环境
// bind函数传入一个对象，返回一个新的函数。
// 依然是将返回的函数作为context上的一个方法。那么在这个方法内部的this自然是指向方法所属的对象。
Function.prototype.mybind = function(context, ...args) {
    context.func = this;
    return function() {
        context.func(...args);
        delete context.func;
    }
}

const obj = {
    x: 1,
    y: 0
}

let x = 2;

function log() {
    console.log(this.x);
    console.log('args: ', ...arguments);
}

const logger = log.mybind(obj, 4, 5, 5);
logger([1, 2, 3]);