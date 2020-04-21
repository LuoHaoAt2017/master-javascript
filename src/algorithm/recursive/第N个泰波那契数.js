// 第N个泰波那契数

// 递推过程
// 边界条件
function tebonacci(n) {
    // 极为重要的优化措施
    const buffer = [];
    const func = function(m) {
        if (buffer[m]) {
            return buffer[m];
        }
        if (m === 0) {
            return 0;
        } else if (m === 1) {
            return 1;
        } else if (m === 2) {
            return 1;
        } else {
            const result = func(m-1) + func(m-2)+ func(m-3);
            buffer[m] = result;
            return result;
        }
    }
    return func(n);
}

console.log('tebonacci 0: ', tebonacci(0));
console.log('tebonacci 1: ', tebonacci(1));
console.log('tebonacci 2: ', tebonacci(2));
console.log('tebonacci 3: ', tebonacci(3));
console.log('tebonacci 25: ', tebonacci(25));

// 使用递归这种简单粗暴的方式，可以通过，但是超时了。
// 中间态是否应该去缓存呢？
