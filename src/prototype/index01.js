function SubType() {
    this.shapes = ["point", "line", "area"];
}

SubType.prototype.draw = function() {
    console.log('我有点线面，给你绘制一个奇形怪状的世界。');
}

function SuperType() {
    this.colors = ["red", "green", "blue"];
}

SuperType.prototype.paint = function() {
    console.log('我有三原色，给你绘制一个多彩缤纷的世界。');
}
// 原型链改写
// SubType丢弃自身的原型，重新指定原型。
// 此时SubType的原型就是SuperType的一个实例。
SubType.prototype = new SuperType();

const circle = new SubType();
const rectangle = new SubType();

// SubType在改写了原型之后(SubType.prototype = new SuperType())
// 定义在旧原型上的draw方法也无法访问到。
circle.draw();