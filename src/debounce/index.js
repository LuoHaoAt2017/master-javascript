window.onload = function() {
    const password = document.getElementById('password');

    function handler(callback, delay) {
        let timer = null;
        return function() {
            const context = this;
            const args = arguments;
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                callback.apply(context, args);
            }, delay);
        }
    };

    const debounce = handler(() => {
        console.log(arguments[0]);
    }, 2000);

    password.addEventListener('input', debounce);
}
