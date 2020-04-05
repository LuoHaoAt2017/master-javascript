// 访问常量和普通变量的时间复杂度是O(1)
// 访问数组中指定下标元素的时间复杂度也是O(1)
// 访问对象中某个属性的时间复杂度是O(n)

// 所以对于那些需要多次访问的属性可以缓存在局部变量中
// case 1
const query = window.location.href.substring(window.location.href.indexOf('?'));
// case 2
const href = window.location.href;
const query = href.substring(href.indexOf('?'));

// case1 和 case2 的区别
// case1 进行了6次属性查找，case2进行了4次属性查找
// case2 相对于case1节省了25%
// 这就是使用局部变量缓存对象的属性，只要能降低时间复杂度的就去降低。

// 循环优化
// 减值迭代替换增值迭代
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#ffffff', '#000000'];
// case 1
for (let i = 0; i < colors.length; i ++) {
    console.log(colors[i]);
}
// case 2
for (let i = colors.length; i > 0; i ++) {
    console.log(colors[i]);
}
// case1和case2相比，case1进行了colors.length次属性查找，case2进行了1次属性查找。

// 使用switch...case替换一系列的if...else，而且将最有可能执行的case放在前面，
// 最不可能的case放在后面。

// 最小化语句数 ，减少代码行数。

// 优化DOM操作

// 现场更新 性能惩罚 => 最小化现场更新
// 对页面上的某个区域进行调整时，浏览器就需要重新计算无数的尺寸。

// 一个页面上事件愈多，响应性就越差。
// 使用事件代理，同样的click事件注明来源，统一在当前页面的最高层处理。