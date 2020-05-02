Array.prototype.myfilter = function(cb) {
    let res = [];
    const list = this;
    const N = list.length;
    for(let index = 0; index < N; index++) {
        if (cb(list[index], index, list)) {
            res.push(list[index]);
        }
    }
    return res;
}

const list = [1, 2, 3, 4, 5, 6, 7];
const filters = list.myfilter(function(elem) {
    return elem % 2;
});
console.log('filters: ', filters);