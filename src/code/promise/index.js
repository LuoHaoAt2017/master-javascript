// 存在的问题：链式调用存在问题。
// 静态方法 Promise.resolve
// 静态方法 Promise.reject

class MyPromise {
    constructor(func) {
        this.value = null;
        this.status = 'pending';
        this.success_cbs = [];
        this.failure_cbs = [];

        const resolved = (value) => {
            if (this.status === 'pending') {
                this.value = value;
                this.status = 'resolved';
                this.success_cbs.forEach(elem => elem());
            }
        }

        const rejected = (error) => {
            if (this.status === 'pending') {
                this.value = error;
                this.status = 'rejected';
                this.failure_cbs.forEach(elem => elem());
            }
        }
        
        try {
            func(resolved, rejected);
        } catch(e) {
            rejected(e);
        }
    }

    then(onsesolved, onrejected) {
        onsesolved = onsesolved ? onsesolved : () => {};
        onrejected = onrejected ? onrejected : () => {};
        if (this.status === 'resolved') {
            onsesolved(this.value);
        }
        if (this.status === 'rejected') {
            onrejected(this.value);
        } 
        if(this.status === 'pending') {
            this.success_cbs.push(() => onsesolved(this.value));
            this.failure_cbs.push(() => onrejected(this.value));
        }
        return this;
    } 

    catch(onrejected) {
        return this.then(null, onrejected);
    }

    finally(callback) {
        return this.then(callback, callback);
    }

    static all(promises) {
        return new Promise((resolve, reject) => {
            const N = promises.length;
            const result = [];
            for(let i = 0; i < N; i++) {
                promises[i].then((value) => {
                    result.push(value);
                    if (result.length === N) {
                        resolve(result);
                    }
                }).catch(() => {
                    reject(result);
                });
            }
        });
    }

    static race(promises) {
        return new Promise((resolve, reject) => {
            const N = promises.length;
            for(let i = 0; i < N; i++) {
                promises[i].then((value) => {
                    resolve(value);
                }).catch((error) => {
                    reject(error);
                });
            }
        });
    }

    static resolve(p) {
        return new MyPromise((resolved) => {
            resolved(p);
        });
    }

    static reject(p) {
        return new MyPromise((resolve, rejected) => {
            rejected(p);
        });
    }
}

new MyPromise(function(resolve) {
    setTimeout(() => {
        resolve(1000);
    }, 1000);
}).then((value) => {
    console.log(value);
}).catch(error => {
    console.error(error);
});

const p1 = new MyPromise(function(resolve, reject) {
    setTimeout(() => {
        resolve(1000);
    }, 1000);
});

const p2 = new MyPromise(function(resolve, reject) {
    setTimeout(() => {
        resolve(1200);
    }, 1200);
});

const p3 = new MyPromise(function(resolve, reject) {
    setTimeout(() => {
        resolve(1500);
    }, 1500);
});

const p4 = new MyPromise(function(resolve, reject) {
    setTimeout(() => {
        resolve(2000);
    }, 2000);
});

MyPromise.all([p1, p2, p3]).then((list) => {
    console.log('all list: ', list);
});

MyPromise.race([p1, p2, p3]).then((item) => {
    console.log('race item: ', item);
});

new MyPromise(function(resolve, reject) {
    setTimeout(() => {
        resolve(2000);
    }, 2000);
}).then(function(value) {
    console.log('value: ', value);
}).then(function(value) {
    console.log('value: ', value);
});