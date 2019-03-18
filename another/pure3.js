/**
 * 纯函数的要点
 * 第三点：纯函数内部的状态在纯函数执行完毕后就被销毁了，专业的说法就是
 * 函数内部状态的生命周期和函数是一致的。这是正着说，反着说，就是不可以在函数内部共享函数外部的变量。
 */

let person = {life: 100, action: 'think'}

function MayBePure() {
  person.death = 'self';
}

/**
 * MayBePure执行结束以后，person还在。person和MayBePure的生命周期不一致。
 * 在MayBePure中共享了外部对象person。
 */