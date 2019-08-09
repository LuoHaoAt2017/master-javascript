function Vue() {
  this.data = {};
  this.methods = {};
  this.props = {};

  this.defaultConfiguration();
}

Vue.defaultConfiguration = function() {

}

Vue.set = function(prop, value) {
  if (prop === undefined) {
    throw Error("prop is null");
  }
  Object.defineProperty(this, prop, {
    configurable: true,
    enumerable: true,
    writable: true,
    value: value
  });
}