function myInstanceof(obj, Func) {
    var proto = obj.__proto__;
    var target = Func.prototype;
    while(proto) {
        if (proto === target) {
            return true;
        }
        proto = proto.__proto__;
    }
    return false;
}
function Foo() {

}
function Bar() {

}
function Tom() {

}

var foo = new Foo();
Bar.prototype = foo;
var bar = new Bar();
var tom = new Tom();

console.log(myInstanceof(bar, Bar));
console.log(myInstanceof(bar, Foo));
console.log(myInstanceof(tom, Tom));
console.log(myInstanceof(tom, Bar));