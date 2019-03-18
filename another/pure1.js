/**
 * 纯函数的要点
 * 第一点：给定输入，无论什么时候调用，无论调用多少次，输出总是确定无疑的。
 * 从数学上说就是 y = f(x)，y的值仅仅取决于x。
 */

const shapes = ['Triangle', 'Square', 'Rectangle', 'Diamond', 'Trapezoid'];
let copy = null, cuts = null;
copy = shapes.slice(0, 2);
console.log('slice first invoke ', copy);
copy = shapes.slice(0, 2);
console.log('slice second invoke ', copy);

cuts = shapes.splice(0, 2);
console.log('splice first invoke ', cuts);
cuts = shapes.splice(0, 2);
console.log('splice second invoke ', cuts);

/*
slice连续两次调用输入的参数都是0和2，
两次返回的结果都是[ 'Triangle', 'Square' ]
splice连续两次调用输入的参数都是0和2，
第一次返回的结果是[ 'Triangle', 'Square' ]
第二次返回的结果是[ 'Rectangle', 'Diamond' ]
可见splice不是纯函数。
*/

