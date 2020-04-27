// 初始化一个二维数组：失败。
// 充填进去的是数组的引用，因此7个子元素的值都是某一个匿名数组的引用。
// 因此，七个子元素共享同一个数组。改一个其余的都同步受到影响，不符合。
const matrix = new Array(7).fill([]);
matrix[0][1] = 1;
console.log('matrix: ', matrix);

// 正确的初始化二维数组的方法
const list = [];
for(let i = 0; i < 7; i++) {
    list[i] = [];
}

list[0][0] = 1;
console.log('list ', list);
