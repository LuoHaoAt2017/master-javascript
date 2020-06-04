// 无序集合
// add
// delete
// has
// clear 清空集合
// size

// 遍历操作
// Set结构的键名就是键值（两者是同一个值）
// Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。

// 实现交集 并集 差集
const list1 = ['开封', '西安', '洛阳', '南京'];
const list2 = ['杭州', '西安', '洛阳', '南京'];

function intersection(list1, list2) {
    const set1 = new Set(list1);
    const set2 = new Set(list2);
    const list = [];
    set1.forEach(elem => {
        if(set2.has(elem)) {
            list.push(elem);
        }
    });
    return list;
}

function union(list1, list2) {
    const set = new Set([].concat(list1, list2));
    return [...set];
}

function difference(list1, list2) {
    const set1 = new Set(list1);
    const set2 = new Set(list2);
    const list = [];
    set1.forEach(elem => {
        if(!set2.has(elem)) {
            list.push(elem);
        }
    });
    set2.forEach(elem => {
        if(!set1.has(elem)) {
            list.push(elem);
        }
    });
    return list;
}

console.log(intersection(list1, list2));
console.log(union(list1, list2));
console.log(difference(list1, list2));