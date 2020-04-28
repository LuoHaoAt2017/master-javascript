function debounce(cb, delay) {
    let timer = null;
    return function handleInput() {
        let args = arguments; // arguments的第一个参数就是evt。
        let context = this; // this的指向取决于handleInput调用的地方。当input事件触发时，this指向input输入框。
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            cb.apply(context, args);
        }, delay);
    }
}

window.onload = function() {
    const keywords = document.getElementById('keywords');
    keywords.addEventListener('input',function() {
        const args = arguments[0];
        console.log('keywords: ', args.target.value);
    });

    const location = document.getElementById('location');
    location.addEventListener('input', debounce(function() {
        const args = arguments[0];
        console.log('location: ', args.target.value);
    }, 1000));
}
