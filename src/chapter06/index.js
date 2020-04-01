"use strict"

const computer = new Object();

Object.defineProperties(computer, {
    cpu: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: ''
    },
    memory: {
        configurable: false,
        writable: false,
        enumerable: false,
        value: ''
    },
    disk: {
        configurable: true,
        enumerable: true,
        get: function() {
            console.log('获取disk');
            return this._disk;
        },
        set: function(value) {
            console.log('设置disk');
            this._disk = value;
        }
    },
    _disk: {
        configurable: true,
        writable: true,
        enumerable: false,
        value: ''
    }
});

// enumerable影响属性是否能够通过for...in...遍历到。
for(let key in computer) {
    console.log('key', key);
}

// writable影响属性能否二次赋值
computer.cpu = 'intel';

console.log('cpu: ', computer.cpu);

// configurable影响属性能否被删除
// 一旦将configurable设置为false，那么就无法更改configurable，writable，enumerable
delete computer.cpu;
if (computer.cpu) {
    console.log('cpu: ', computer.cpu);
    console.log('删除失效');
} else {
    console.log('删除成功');
}

try {
    computer.memory = '256M';
    if (computer.memory) {
        console.log('configurable失效');
        console.log('memory: ', computer.memory);
    } else {
        console.log('configurable生效');
    }
} catch(err) {
    console.error('error');
    try {
        Object.defineProperty(computer, 'memory', {
            writable: true
        });
        computer.memory = '256M';
    } catch(err) {
        console.error('在configurable设置成false后，无法再次修改configurable，writable，enumerable特性');
    }
}

computer.disk = "xyz";
console.log('disk ', computer.disk);
