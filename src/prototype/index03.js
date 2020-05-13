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

// 在实例中不仅可以访问而且可以修改原型中的对象
// 对原型上的引用类型数据进行更改后所有的实例属性会受到影响
// 这一点是特质，无所谓优点或者缺点。善加利用，光芒万丈。
circle.colors.push('yellow');
console.log('circle.colors: ', circle.colors);
console.log('rectangle.colors: ', rectangle.colors);
