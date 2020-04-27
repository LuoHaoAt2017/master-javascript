// 头部添加 unshift
// 头部删除 shift

// 尾部添加 push
// 尾部删除 pop

// 栈是尾部添加，尾部删除。因此对应push和pop方法。
// 队列是尾部添加，首部删除。对应push和shift方法。

// 将一个十进制数转化成二进制。

function transform(n) {
    const list = [];
    do {
        r = n % 2;
        n = Math.floor(n / 2);
        list.unshift(r); //最后的余数放在数组的第一个位置，最先的余数放在数组的最后。
    } while (n > 0);
    return list.join('');
}

function transform2(n) {
    // 栈的思想
    const list = [];
    let value = '';
    do {
        r = n % 2;
        n = Math.floor(n / 2);
        list.push(r); //最后的余数放在数组的第一个位置，最先的余数放在数组的最后。
    } while (n > 0);
    while (list.length) {
        value += list.pop();
    }
    return value;
}

console.log('transform: ', transform(13));
console.log('transform: ', transform2(13));