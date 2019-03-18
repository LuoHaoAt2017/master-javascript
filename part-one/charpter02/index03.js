//显示绑定this不会导致this绑定的丢失

function calculate() {
  console.log(`the calculation cost ${this.time} second`);
}

var program = {
  time: '1000ms'
}

calculate.call(program);

