Function.prototype.mycall = function(context, ...args) {
    context.func = this;
    const result = context.func(...args);
    delete context.func;
    return result;
}

const foo = {
    x: 1
}

function say() {
    console.log('x: ', this.x);
    console.log('arguments: ', arguments);
}

say.mycall(foo, 1, 2, 3);