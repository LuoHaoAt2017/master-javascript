function throttling(cb, delay) {
    let previous = 0;
    return function() {
        const context = this;
        const args = arguments;
        let current = Date.now();
        if (current - previous > delay) {
            cb.apply(context, args);
            previous = current;
        }
    }
}

const onInput = throttling(function() {
    const value = arguments[0].target.value;
    console.log('scroll...', value);
}, 1000);

window.onload = function() {
    const location = document.getElementById('location');
    location.addEventListener('input', onInput);
    
    const keywords = document.getElementById('keywords');
    keywords.addEventListener('input', function() {
        console.log('keywords: ', arguments[0].target.value);
    });
}
