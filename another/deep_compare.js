
function deep_compare(first, second) {
  if (first === second) {
    return true;
  } else {
    const keys1 = Object.keys(first);
    const keys2 = Object.keys(second);
    if (keys1.length !== keys2.length) {
      return false;
    } else {
      return keys1.every(function(key) {
        return deep_compare(first[key], second[key]);
      });
    }
  }
}

//export default deep_compare;

/**
 * JS的数据类型
 * 基本类型，对象类型
 * 
 * 如果是基本类型，那就直接比较。
 * 如果不是基本类型，那么遍历对象中每一对键值对，对每一个键对应的值依次进行比较。
 */

let obj1 = {side: 4, square: 12, info: {
  author: 'luohao'
}};

let obj2 = {side: 4, square: 12, info: {
  author: 'luohao'
}};

let bool = deep_compare(obj1, obj2);
console.log('obj1 === obj2 ? ', bool);

//将数组中的每一项看成是以下标为键，值为值的对象
let list1 = ['武汉', '西安', '广州'];
let list2 = ['武汉', '西安', '广州'];
bool = deep_compare(list1, list2);
console.log('list1 === list2 ? ', bool);