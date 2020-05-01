const obj = {
    x: 1
}

function log() {
    console.log(this);
    console.log(arguments[0]);
}

// 原理在mycall中有解释。
// 在函数原型上定义了myapply方法，所有的函数都继承了myapply。
Function.prototype.myapply = function(context, args) {
    context.func = this;
    const result = context.func(args);
    delete context.func;
    return result;
}

log.myapply(obj, [1, 2, 3]);

console.log(typeof log); // function
