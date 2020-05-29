class MyPromise {
    constructor(cb) {
        this.status = 'pending';
        this.value = null;
        this.error = null;
        this.successCallbacks = [];
        this.failureCallbacks = [];

        const resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'resolved';
                this.value = value;
                this.successCallbacks.forEach(cb => cb());
            }
        };
        
        const reject = (error) => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.error = error;
                this.failureCallbacks.forEach(cb => cb());
            }
        }

        cb(resolve, reject);
    }

    then(onResolved, onRejected) {
        onResolved = onResolved ? onResolved : () => {};
        onRejected = onRejected ? onRejected : () => {};
        if(this.status === 'pending') {
            this.successCallbacks.push(() => onResolved(this.value));
            this.failureCallbacks.push(() => onRejected(this.error));
        } else if (this.status === 'resolved') {
            onResolved(this.value);
        } else {
            onRejected(this.error);
        }
        return this;
    }

    catch(cb) {
        return this.then(null, cb);
    }

    static all(promises) {
        return new Promise((resolve, reject) => {
            let response = [];
            promises.forEach(elem => {
                elem.then((res) => {
                    response.push(res);
                    if(response.length === promises.length) {
                        resolve(response);
                    }
                }).catch((error) => {
                    reject(error);
                });
            });
        });
    }

    static race(promises) {
        return new Promise((resolve, reject) => {
            promises.forEach(elem => {
                elem.then((resp) => resolve(resp)).catch((err) => reject(err));
            });
        });
    }
}