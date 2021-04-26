var obj = {x: 1};
function Foo() {this.y = 2;}
Foo.prototype = obj;
var foo = new Foo();
function hasOwnProperty(prop, obj) {
    if(prop in obj) {
        if(foo.hasOwnProperty(prop)) {
            console.log(prop, '在实例上');
            return 1;
        } else {
            console.log(prop, '在原型上');
            return -1;
        }
    } else {
        console.log(prop, '既不在实例上也不在原型上');
        return 0;
    }
}
hasOwnProperty('x', foo);
hasOwnProperty('y', foo);
hasOwnProperty('z', foo);