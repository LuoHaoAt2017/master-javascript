var obj = {};
function Foo() {this.y = 2;}
Foo.prototype = obj;
Object.defineProperty(obj, 'x', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: 1
});
var foo = new Foo();
for(var key in foo) {
    console.log(key);
}
console.log('x' in foo);
console.log('y' in foo);
