function throttling(cb, interval) {
    let t1 = Date.now();
    return function() {
        let t2 = Date.now();
        if (t2 - t1 > interval) {
            cb();
            t1 = t2;
        }
    }
}

const onScroll = throttling(() => {
    console.log('scroll...');
}, 1000);

window.addEventListener('scroll', onScroll);