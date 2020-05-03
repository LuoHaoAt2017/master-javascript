// 事件在一段时间内不再触发，那么就执行事件的回调函数。
window.onload = function() {
    const debounce = function(cb, delay) {
        let timer = null;
        return function() {
            const args = arguments;
            const context = this;
            if (timer) {
                clearTimeout(timer);
            }            
            timer = setTimeout(() => {
                cb.apply(context, args);
            }, delay);
        }
    };
    
    const handleScroll = debounce(() => {
        const target = arguments[0].target;
        console.log('target', target);
    }, 500);
    
    window.addEventListener('scroll', handleScroll);
}
