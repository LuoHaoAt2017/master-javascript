// 链式调用promise
new Promise(function(resolve) {
    setTimeout(() => {
        resolve(0);
    }, 1000);
}).then(function(res) {
    if (Math.random() > 0.7) {
        throw new Error('网络出现问题');
    }
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(++res);
        }, 1000);
    })
}).then(function(res) {
    return new Promise(function(resolve) {
        resolve(++res);
        // 一般情况下异常抛出，会将promsie的状态由penging转化成rejected，
        // 但是由于在抛出异常以前，promsie的状态已经由penging转化成resolved。
        // 因此，此处的异常不会更改promise的状态。而且不会被传递到promise外部。
        throw new Error('promise状态已经固化，此处的异常直接被忽略。');
    })
}).then(function(res) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(++res);
        }, 1000);
    })
}).then(function(res) {
    return new Promise(function(resolve) {
        resolve(++res);
        setTimeout(() => {
            // Promsie.then是微操作，setTimeout是宏操作。
            // 只有微任务队列中所有的微任务都执行完毕了，才会去执行宏任务队列中的宏任务。
            // 此时的异常抛出和Promsie没有什么关系了。
            throw new Error('在函数体外抛出异常');
        }, 1000);
    });
}).then(function(res) {
    console.log('response: ', res);
}).catch(function(err) {
    // 调用链上的异常在此被捕获
    console.log(err);
}).finally(function() {
    // finally不接受任务参数
    // 因此也就无法感知前面的promise的状态。
    // 因此finally内部的逻辑应该和promsie无关。
});
