var computor = {
  mouse: '雷蛇',
  keybord: '麦点',
  operate: caculate
}

function caculate() {
  console.log(`it has ${this.mouse} mouse and ${this.keybord} keybord`);
}

computor.operate();

//隐式绑定容易导致this绑定的丢失
//隐式绑定退化成默认绑定
var func = computor.operate;

func();

//将函数作为参数传递也可能会导致this绑定的丢失

function machine(operate) {
  operate();
}

machine(computor.operate);