
function debounce(cb, interval) {
    let t1 = Date.now();
    return function() {
        let t2 = Date.now();
        if (t2 - t1 > interval) {
            cb();
            t1 = t2;
        }
    }
}

const onScroll = debounce(() => {
    console.log('scroll...');
}, 3000);

window.addEventListener('scroll', onScroll);