
Object.defineProperty(Object, "myAssign", {
  configurable: true,
  enumerable: true,
  writable: false,
  value: function() {
    if (arguments[0] === undefined) {
      throw Error("dest can not be undefined");
    }
    let rest = Array.prototype.slice.call(arguments, 1);
    Array.prototype.forEach.call(rest, function(source) {
      Object.getOwnPropertyNames(source).forEach(function(prop) {
        Object.defineProperty(arguments[0], prop, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: source[prop]
        });
      });
    });
  }
});

Object.defineProperty(Object, "shallowClone", {
  configurable: true,
  enumerable: true,
  writable: false,
  value: function(dest, source) {
    if (dest === undefined) {
      throw Error("dest can not be undefined");
    }
    Object.getOwnPropertyNames(source).forEach(function(prop) {
      Object.defineProperty(dest, prop, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: source[prop]
      });
    });
  }
});

Object.defineProperty(Object, "deepClone", {
  configurable: true,
  enumerable: true,
  writable: false,
  value: function(dest, source) {
    if (dest === undefined || source === undefined) {
      throw Error("dest can not be undefined");
    }
    if (!(source instanceof Object)) {
      throw Error(source, "is not a object");
    }
    Object.getOwnPropertyNames(source).forEach(function(prop) {
      if (typeof source[prop] === Object) {
        Object.deepClone(dest[prop], source[prop]);
      } else {
        dest[prop] = source[prop];
      }
    });
  }
});

const a = {
  x: 1,
  y: 2,
  z: {
    m: 3,
    n: 4
  }
}

const b = {
  r: 4,
  s: 5,
  z: {
    m: 5,
    n: 6
  }
}

Object.deepClone(a, b);

console.log(a);
b.z.m = 12;
console.log(a);