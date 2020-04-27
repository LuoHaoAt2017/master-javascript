// 合并两个有序数组
let list1 = [1, 2, 5, 8, 9];
let list2 = [0, 3, 5, 7];

// 时间复杂度：O(m+n)
// 空间复杂度：O(m+n)
function merge_two_sorted_list(list1, list2) {
    // list1 list2是数组引用的副本。
    let p = 0;
    let q = 0;
    let r = 0;
    let list = [];
    const len1 = list1.length;
    const len2 = list2.length;
    
    while (p < len1 && q < len2) {
        if (list1[p] <= list2[q]) {
            list[r++] = list1[p++];
        } else {
            list[r++] = list2[q++];
        }
    }
    while (p < len1) {
        list[r++] = list1[p++];
    }
    while (q < len2) {
        list[r++] = list2[q++];
    }
    return list;
}

function better_merge_algo(list1, list2) {
    let p = list1.length-1;
    let q = list2.length-1;
    while (p > -1 && q > -1) {
        if (list2[q] > list1[p]) {
            list1.splice(p, 0, list2[q--]);
        } else {
            p--;
        }
    }
    while (q > -1) {
        list1.splice(0, list2[q--]);
    }
}

// 保留原始数组，返回一个新数组。
// const list = better_merge_algo(list1, list2);
// console.log(list.join(', '));

// 更改原来的数组。
better_merge_algo(list1, list2);
console.log(list1.join(', '));