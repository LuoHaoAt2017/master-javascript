Array.prototype.myfind = function(cb) {
    const list = this;
    const len = list.length;
    for(let i = 0; i < len; i++) {
        if (cb(list[i], i, list)) {
            return list[i];
        }
    }
    return;
}   

const list = [1, 2, 3, 4, 5, 6];

const res = list.myfind(function(elem) {
    return elem > 4;
});

console.log('res: ', res);