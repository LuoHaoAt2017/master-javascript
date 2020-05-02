Array.prototype.myevery = function(cb) {
    const list = this;
    for(let i = 0; i < list.length; i++) {
        if (!cb(list[i], i, list)) {
            return false;
        }
    }
    return true;
}
const list = [1, 3, 5, 7, 9, 0];
const res = list.myevery(function(elem) {
    return elem % 2 === 1;
});
console.log('res: ', res);
