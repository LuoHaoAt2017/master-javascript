class MyPromise {
    constructor(func) {
        this.state = 'pending';
        this.result = null;
        this.success_cbs = [];
        this.failure_cbs = [];

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'resolved';
                this.result = value;
                // 此处的func就是todo1处经过封装的回调函数，不接收参数。
                // 细节是读懂的关键。
                this.success_cbs.map(func => func());
            }
        }

        const reject = (error) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.result = error;
                // 此处的func就是todo2处经过封装的回调函数，不接收参数。
                this.failure_cbs.map(func => func(error));
            }
        }

        try {
            // 将state的控制权交给了外部函数func。
            // 当外部调用resolve方法时，更改内部state的状态。
            // 根据state状态的变化执行注册在success_cbs或者failure_cbs数组内部的方法。
            func(resolve, reject);
        } catch(e) {
            reject(e);
        }
    }

    then(onResolve, onReject) {
        onResolve = typeof onResolve === 'function' ? onResolve : v => v;
        onReject = typeof onReject === 'function' ? onReject : v => v;
        if (this.state === 'pending') {
            // console.log('then, pending');
            // const result = this.result;
            // onResolve方法不能够接收result的副本，只能够使用this.result的形式
            // 当promise的状态发生改变时，执行方法，发现了this.result，
            // 由于采用的是箭头函数，this仍然指向promise实例。
            this.success_cbs.push(() => onResolve(this.result)); // todo1
            this.failure_cbs.push(() => onReject(this.result));  // todo2
        } else if (this.state === 'resolved') {
            // console.log('then, resolved');
            onResolve(this.result);
        } else if (this.state === 'rejected') {
            // console.log('then, rejected');
            onReject(this.result);
        }
        return this; // 一定要返回，否则无法进行链式调用
    }

    catch(onReject) {
        this.then(null, onReject);
        return this; // 一定要返回，否则无法进行链式调用
    }

    static all(promises) {
        let results = [];
        let N = promises.length;
        return new MyPromise((resolve, reject) => {
            for(let i = 0; i < N; i++) {
                promises[i].then((res) => {
                    results.push(res);
                    if (results.length === N) {
                        resolve(results);
                    }
                }).catch(() => {
                    reject();
                });
            }
        })
    }

    static race(promises) {
        // 多个promises，公用MyPromise的一个resolve，
        // 只要其中一个promise执行完毕，then的参数resolve被执行
        // 那么MyPromise也就可以执行then的函数参数。

        // MyPromise的状态变化取决于promises中的任意一个。
        return new MyPromise(function(resolve, reject) {
            for(let i = 0; i < promises.length; i++) {
                promises[i].then(resolve, reject);
            }
        });
    }
}

new MyPromise(function(resolve, reject) {
    // let seed = Math.random();
    // resolve(seed);
    setTimeout(() => {
        let seed = Math.random();
        if (seed > 0.5) {
            resolve(seed);
        } else {
            reject(seed);
        }
    }, 1000);

}).then(function(res) {
    //console.log('response: ', res);
}).catch(function(err) {
    console.log('error: ', err);
});

const p1 = new MyPromise(function(resolve) {
    const delay = Math.floor(Math.random() * 3000);
    setTimeout(() => {
        resolve(delay);
    }, delay);
});
const p2 = new MyPromise(function(resolve) {
    const delay = Math.floor(Math.random() * 3000);
    setTimeout(() => {
        resolve(delay);
    }, delay);
});
const p3 = new MyPromise(function(resolve) {
    const delay = Math.floor(Math.random() * 3000);
    setTimeout(() => {
        resolve(delay);
    }, delay);
});

MyPromise.race([p1, p2, p3]).then(function(res) {
    //console.log('rece: ', res);
});
MyPromise.all([p1, p2, p3]).then(function(res) {
    console.log('all: ', res);
});

// 第一步：执行MyPromise构造函数内部的同步代码
// 第二步：执行then()函数，将then函数的函数参数做一层包装添加到success_cbs中。
// 第三步：执行catch()函数，将catch函数的函数参数做一层包装添加到failure_cbs中。
// 第四步：当状态由pending转化到resolved时，resolve函数执行，success_cbs中的回调函数依次执行。
// 第五步：当状态由pending转化到rejected时，reject函数执行，failure_cbs中的回调函数依次执行。