// 数组去重的方式

// sort + bubble
function deleteDuplicates3(list) {
    // 更改了原数组
    // 空间复杂度O(n)
    // 时间复杂度O(n)
    let temp = [];
    list.sort(); //排序至关重要
    for(let i = 0; i < list.length; i++) {
        if(list[i] !== list[i+1]) {
            temp.push(list[i]);
        }
    }
    console.log(...temp);
}

// set
function deleteDuplicates1(list) {
    var set = new Set(list);
    console.log(...set);
}

// map
function deleteDuplicates4(list) {
    let map = new Map();
    for(let elem of list) {
        if(!map.has(elem)) {
            map.set(elem, 0);
        }
        map.set(elem, map.get(elem)+1);
    }
    console.log(...map.keys());
}

// lastIndexof + splice
function deleteDuplicates2(list) {
    // 将重复的项删除只留下一个
    for(let i = 0; i < list.length; i++) {
        let p = list.lastIndexOf(list[i]);
        if(p !== i) {
            list.splice(i, p-i);
        }
    }
    console.log(...list);
}

// indexOf
function deleteDuplicates5(list) {
    let result = [];
    list && list.forEach(elem => {
        if(result.indexOf(elem) === -1) {
            result.push(elem);
        }
    });
    console.log(...result);
}

// filter
function deleteDuplicates6(list) {
    let result = [];
    result = list.filter((elem, index) => list.indexOf(elem) === index);
    console.log(...result);
}

let list;
list = ['西安', '西安', '洛阳', '南京', '西安', '洛阳', '开封', '北京', '南京'];
deleteDuplicates1(list);
list = ['西安', '西安', '洛阳', '南京', '西安', '洛阳', '开封', '北京', '南京'];
deleteDuplicates2(list);
list = ['西安', '西安', '洛阳', '南京', '西安', '洛阳', '开封', '北京', '南京'];
deleteDuplicates3(list);
list = ['西安', '西安', '洛阳', '南京', '西安', '洛阳', '开封', '北京', '南京'];
deleteDuplicates4(list);
list = ['西安', '西安', '洛阳', '南京', '西安', '洛阳', '开封', '北京', '南京'];
deleteDuplicates5(list);
list = ['西安', '西安', '洛阳', '南京', '西安', '洛阳', '开封', '北京', '南京'];
deleteDuplicates6(list);