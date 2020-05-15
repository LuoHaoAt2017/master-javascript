window.onload = function() {
    const password = document.getElementById('password');

    // 防抖处理
    function debounce(cb, delay) {
        let timer = null;
        return function(...args) {
            const context = this;
            // 如果存在timer，那么清空，并重新创建。
            // 如果没有timer，那么直接创建。

            if(timer) {
                clearTimeout(timer);
                timer = null;
            }                
            timer = setTimeout(() => {
                cb.apply(context, args);
            }, delay);
        }
    }

    // 节流处理
    function throttle(cb, delay) {
        let timer = null;
        return function(...args) {
            const context = this;
            if(!timer) {
                timer = setTimeout(() => {
                    cb.apply(context, args);
                    clearTimeout(timer);
                    timer = null;
                }, delay);
            }
        }
    }
    
    // 综合节流和防抖
    function throttleDebounce(cb, delay) {
        let timer = null;
        let previous = new Date().getTime();
        return function(...args) {
            const context = this;
            let current = new Date().getTime();
            console.log('current: ', current);
            if(timer) {
                if(current - previous > delay) {
                    cb.apply(context, args);
                    clearTimeout(timer);
                    previous = current;
                } else {
                    clearTimeout(timer);
                    timer = setTimeout(() => {
                        cb.apply(context, args);
                    }, delay);
                }
            } else {
                timer = setTimeout(() => {
                    cb.apply(context, args);
                }, delay);
            }
        }
    }

    const handleInput = throttleDebounce((...args) => {
        console.log(args[0].target);
    }, 2000);
    password.addEventListener('input', handleInput);
}