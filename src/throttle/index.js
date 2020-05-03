// 事件在一段时间内不再触发，那么就执行事件的回调函数。
window.onload = function() {

    const throttle = function(cb, delay) {
        let timer = null;
        return function() {
            if (!timer) {
                timer = setTimeout(() => {
                    cb.apply(this, arguments);
                    timer = null;
                }, delay);
            }
        }
    }

    const handleScroll = throttle(() => {
        console.log(arguments[0]);
    }, 1000);
    
    window.addEventListener('scroll', handleScroll);
}
