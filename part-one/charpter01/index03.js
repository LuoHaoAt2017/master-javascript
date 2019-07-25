let list = [
  {id: '001', value: 3}, 
  {id: '002', value: 6}, 
  {id: '003', value: 1}
];

let target = list.reduce((pre, cur) => {
  if (pre.value < cur.value) {
    return pre;
  } else {
    return cur;
  }
});

console.log('target ', target);