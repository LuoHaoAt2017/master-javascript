/**
 * 纯函数的要点
 * 第二点：在函数内部不可以改变函数外部对象的状态
 */

let shapes = ['Triangle', 'Square', 'Rectangle', 'Diamond', 'Trapezoid'];
console.log('before forEach call. shapes ', shapes);
shapes.forEach(function(shape, index, shapes) {
  shapes[index] = '$' + shape
})
console.log('after forEach call. shapes ', shapes);

/**
 * 在modify内部改变传递进来的参数list，由于对象传递的是引用，
 * 因此在函数内部改变list，也就间接地改变了函数外部的list。
 */

function modify(list) {
  if (list instanceof Array) {
    list.push('青海');
  }
}

let cities = ['武汉', '西安', '广州', '重庆', '沈阳'];
console.log('before map call. cities ', cities);
modify(cities);
console.log('after map call. cities ', cities);