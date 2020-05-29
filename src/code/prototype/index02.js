function SubType() {
    this.shapes = ["point", "line", "area"];
}

function SuperType() {
    this.colors = ["red", "green", "blue"];
}

SuperType.prototype.paint = function() {
    console.log('我有三原色，给你绘制一个多彩缤纷的世界。');
    return this;
}
// 原型链改写
// SubType丢弃自身的原型，重新指定原型。
// 此时SubType的原型就是SuperType的一个实例。
SubType.prototype = new SuperType();

// 在改动后的原型上添加方法。
SubType.prototype.draw = function() {
    console.log('我有点线面，给你绘制一个奇形怪状的世界。');
    return this;
}

const circle = new SubType();
const rectangle = new SubType();
circle.paint().draw();
console.log('circle instanceof SubType: ', circle instanceof SubType);
console.log('circle instanceof SuperType: ', circle instanceof SuperType);
console.log('circle instanceof Object: ', circle instanceof Object);