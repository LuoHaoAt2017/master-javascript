// 事件在一段时间内不再触发，那么就执行事件的回调函数。
window.onload = function() {
    const debounce = function(cb, delay) {
        let timer = null, previous = 0;
        return function() {
            let current = Date.now();
            if (current - previous > delay) {
                cb.apply(this, arguments);
                previous = current;
            } else {
                timer && clearTimeout(timer);
                timer = setTimeout(() => {
                    cb.apply(this, arguments);
                    previous = current;
                }, delay);
            }
        }
    };
    
    const handleScroll = debounce(() => {
        const target = arguments[0].target;
        console.log('target', target);
    }, 1000);
    
    window.addEventListener('scroll', handleScroll);
}
