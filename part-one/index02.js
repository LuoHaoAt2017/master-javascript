function mixin(dest, src, cover) {
  if (dest === undefined) {
    throw Error("dest can not null");
  }
  if (src === undefined) {
    throw Error("src can not null");
  }
  if (cover === undefined) {
    cover = false;
  }
  Object.getOwnPropertyNames(src).forEach(function(prop) {
    if (Object.prototype.hasOwnProperty.call(dest, prop)) {
      return;
    }
    let value = Object.getOwnPropertyDescriptor(src, prop);
    Object.defineProperty(dest, prop, value);
  });
}

const a = {
  x: 1,
  y: 2,
  z: 3,
  say: function() {
    console.log("local state (x, y, z)");
  }
}

const b = {
  r: 4,
  s: 5,
  z: 6,
  run: function() {
    console.log("local state (r, s, z)");
  }
}

const c = {
  m: 4,
  n: 5,
  y: 6,
  bit: function() {
    console.log("local state (m, n, y)");
  }
}

mixin(a, b);
mixin(a, c);

console.log("mixin a ", a);