//箭头函数根据外层作用域来调用
var phythic = {
  px: 1,
  py: 2,
}

function utter() {
  setTimeout(() => {
    console.log(this.px);
  }, 1000);
}

utter.apply(phythic);
