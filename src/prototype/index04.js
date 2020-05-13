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

SubType.prototype = new SuperType();

const circle = new SubType();
const rectangle = new SubType();
circle.colors.push('yellow');
console.log('circle.colors: ', circle.colors);
console.log('rectangle.colors: ', rectangle.colors);
