Array.prototype.mysome = function(cb) {
    const list = this;
    for(let i = 0; i < list.length; i++) {
        if (cb(list[i], i, list)) {
            return true;
        }
    }
    return false;
}

const list = [1, 3, 5, 7, 9, 0];

const res = list.mysome(function(elem) {
    return elem % 2 === 0;
});

console.log('res: ', res);
