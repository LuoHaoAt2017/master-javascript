//默认绑定
//在严格模式下，默认绑定到global,而不是全局对象。
//在非严格模式下，默认绑定到全局对象上。
var place = 'earth';
function watch() {
  console.log(`stand on ${this.place} to observe`);
}
watch();
//watch在全局作用域中调用，因此this绑定到全局对象。