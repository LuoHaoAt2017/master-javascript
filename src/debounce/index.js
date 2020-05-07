window.onload = function() {
    const password = document.getElementById('password');

    function handler(callback, delay) {
        let timer = null;
        return function(evt) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                callback.call(this, evt.target);
            }, delay);
        }
    };

    const debounce = handler(() => {
        console.log(arguments[0]);
    }, 2000);

    password.addEventListener('input', debounce);
}
