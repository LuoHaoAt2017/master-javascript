//将数组 arr 中的元素作为调用函数 fn 的参数

function argsAsArray(fn, arr) {
  return fn.apply(this, arr);
}

const books = ["石头记", "情僧录", "风月宝鉴", "金陵十二钗", "金玉缘"];
const sprits = ["竞争精神", '批判精神', '思辨精神', '自由精神', '博爱精神']

var xue = {
  name: '薛宝钗',
  word: '山中高士晶莹雪'
}

var lin = {
  name: '林黛玉',
  word: '世外仙姝寂寞林' 
}

function sing() {
  console.log(`sing for ${this.name} ===> ${this.word}`);
  for (var i = 0; i < arguments.length; i++) {
    console.log(`argument ${arguments[i]}`);
  }
}

sing.call(lin, books, sprits);

sing.apply(lin, books);
sing.apply(lin, sprits);
sing.apply(lin, books, sprits);
console.log('------------------');
sing.bind(lin, sprits)();