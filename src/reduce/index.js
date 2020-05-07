const list = [1, 2, 3, 4, 5, 6, 7];
Array.prototype.myreduce = function(callback, initData) {
    const list = this;
    let result = list[0], start = 1; 
    if (initData) {
        start = 0;
        result = initData;
    }
    for(let i = start; i < list.length; i++) {
        result = callback(result, list[i]);
    }
    return result;
}

const result1 = list.reduce(function(pre, cur) {
    return pre + cur;
});

const result2 = list.myreduce(function(pre, cur) {
    return pre + cur;
}, -2);

console.log('result1: ', result1);
console.log('result2: ', result2);