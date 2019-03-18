function createSortFunc(prop) {
  
  return function sortFunc(list) {
    let len = list && list.length;
    for (var i = 0; i < len; i++) {
      for(var j = 0; j < len-i-1; j++) {
        if (list[j][prop] > list[j+1][prop]) {
          var temp = list[j];
          list[j] = list[j+1];
          list[j+1] = temp;
        }
      }
    }
    return list;
  }
}

let countries = [{
  name: '阿拉伯帝国',
  time: 450,
}, {
  name: '拜占庭帝国',
  time: 1000,
}, {
  name: '奥斯曼帝国',
  time: 500,
}, {
  name: '蒙古帝国',
  time: 100,
}, {
  name: '莫卧儿帝国',
  time: 380,
}];

console.log('unsorted ', countries);
var result = createSortFunc('time')(countries);
console.log('sorted ', result);