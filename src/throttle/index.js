window.onload = function() {
    const password = document.getElementById('password');

    function throttle(handler, delay) {
        let timer = null;
        return function() {
            const context = this;
            const args = arguments;
            if (!timer) {
                timer = setTimeout(() => {
                    handler.apply(context, args);
                    clearTimeout(timer);
                }, delay);
            }
        }
    }

    let handleInput = throttle((evt) => {
        console.log(evt.target.value);
    }, 2000);

    password.addEventListener('input', handleInput);
}
