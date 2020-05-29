Function.prototype.mybind = function(context, ...args) {
    context.func = this;
    return function() {
        return context.func(...args);
    }
}

const foo = {
    x: 1
}

function say() {
    console.log('x: ', this.x);
    console.log('arguments: ', arguments);
}

const func = say.mybind(foo, 1, 2, 3);
func();
func();