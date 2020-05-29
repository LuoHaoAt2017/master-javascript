const foo = {
    x: 1
}

const bar = {
    x: 2
}

function say() {
    console.log('x: ', this.x, ' arguments: ', arguments);
}

say.apply(foo);
say.apply(bar, [1, 2, 3]);

Function.prototype.myapply = function(context, args) {
    context.func = this;
    const result = context.func(args);
    delete context.func;
    return result;
}

say.myapply(foo, [1, 2, 3]);

