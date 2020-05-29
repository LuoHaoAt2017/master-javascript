// 采取闭包的方式
const nextTick = (function() {
    const callbacks = []; // 批处理队列
    let pending = false;  // 锁
    return function(cb) {
        callbacks.push(cb);
        if(!pending) {
            pending = true; // 上锁
            setTimeout(() => {
                // 作为宏任务
                const cbs = callbacks.slice(0);
                callbacks.length = 0; // 清空任务队列
                pending = false;      // 解锁
                cbs.forEach(cb => cb());
            }, 0);
        }
    }
})();