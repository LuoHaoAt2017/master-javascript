function mixin(obj, mixins) {
  let newObj = obj;
  newObj.prototype = mixins.prototype;

  for (let prop in mixins) {
    if (mixins.hasOwnProperty(prop)) {
      newObj[prop] = mixins[prop];
    }
  }
  return newObj;
}

function Man() {
  this.think = function() {
    console.log('I can think');
  }
}

function Bird() {
  this.fly = function() {
    console.log('I can fly');
  }
}

function Fish() {
  this.swim = function() {
    console.log('I can swim');
  }
}

let man = new Man();
let bird = new Bird();
let fish = new Fish();

let superMan = mixin(man, bird);
superMan = mixin(superMan, fish);
superMan.fly();
superMan.swim();

/**
 * mixin混入将源对象的可枚举属性复制到目标对象
 */