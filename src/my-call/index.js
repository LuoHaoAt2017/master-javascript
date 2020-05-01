const obj = {
    x: 1
}

function log() {
    console.log(this);
    console.log(arguments);
}
// call方法是定义在Function对象上，
// 所有的方法因此都继承了call。
// arguments对象不是一个 Array 。
// 它类似于Array，但除了length属性和索引元素之外没有任何Array属性。
// 展开语法... 将数组在语法层面展开成零散的多个变量。
// 传入不定参数，改变this的指向。

// 思考: this的指向。
// 改变一个函数的执行上下文 => 将这个函数作为某个对象的方法。
// 改变一个函数的执行上下文 => 将这个函数作为某个对象的方法。
// 改变一个函数的执行上下文 => 将这个函数作为某个对象的方法。

Function.prototype.mycall = function(context, ...args) {
    context.func = this;
    const result = context.func(...args);
    delete context.func;
    return result;
}

log.mycall(obj, 2, [3, 4], {p: 5, q: 6});

// 涉及到的基础知识
