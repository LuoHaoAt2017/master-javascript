const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 作为第一次调用 callback函数时的第一个参数的值。 
// 如果没有提供初始值，则将使用数组中的第一个元素。
Array.prototype.myreduce = function(cb, initData) {
    const list = this;
    const len = list.length;
    let start, result;

    if (initData) {
        start = 0;
        result = initData
    } else {
        start = 1;
        result = list[0];
    }

    for(let i = start; i < len; i++) {
        result = cb(result, list[i], i, list);
    }

    return result;
}

const res = list.myreduce(function(accelator, cur, index, array) {
    return accelator + cur;
}, 5);

console.log('res: ', res);