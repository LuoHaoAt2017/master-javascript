const p1 = new Promise(function(resolve) {
    const delay = Math.floor(Math.random() * 3000);
    setTimeout(() => {
        resolve(delay);
    }, delay);
});
const p2 = new Promise(function(resolve) {
    const delay = Math.floor(Math.random() * 3000);
    setTimeout(() => {
        resolve(delay);
    }, delay);
});
const p3 = new Promise(function(resolve) {
    const delay = Math.floor(Math.random() * 3000);
    setTimeout(() => {
        resolve(delay);
    }, delay);
});

Promise.all([p1, p2, p3]).then(function(res) {
    console.log('p1, p2, p3 all: ', res);
});
Promise.race([p1, p2, p3]).then(function(res) {
    console.log('p1, p2, p3 race: ', res);
});
