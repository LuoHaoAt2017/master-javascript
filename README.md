谈谈你对this的理解
第一：this的指向取决于函数的调用位置，和函数的声明位置位置没有关系。
第二：如何找出函数的调用位置？寻找调用栈 call stack。当前正在执行的函数的前一个调用。
第三：具体的表现形式：默认绑定，隐式绑定，显式绑定，new绑定，箭头函数。
第四：在优先级上 new绑定 > 显示绑定 > 隐式绑定 > 默认绑定

导致回流的属性和方法
clientWidth、clientHeight、clientTop、clientLeftoffsetWidth、offsetHeight、offsetTop、offsetLeftscrollWidth、scrollHeight、scrollTop、scrollLeftscrollIntoView()、scrollIntoViewIfNeeded()getComputedStyle()getBoundingClientRect()scrollTo()

导致重绘的属性
color
background-color
opacity
visibility

有时即使仅仅回流一个单一的元素,它的父元素以及任何跟随它的元素也会产生回流。现代浏览器会对频繁的回流或重绘操作进行优化：浏览器会维护一个队列,把所有引起回流和重绘的操作放入队列中,如果队列中的任务数量或者时间间隔达到一个阈值的,浏览器就会将队列清空,进行一次批处理,这样可以把多次回流和重绘变成一次。

