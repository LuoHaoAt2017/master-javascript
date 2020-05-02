Array.prototype.myEach = function(cb) {
    const list = this;
    for (let i = 0; i < list.length; i++) {
        cb(list[i], i, list);
    }
}

const nodes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nodes.myEach(function(elem, index, list) {
    console.log(list[index] === elem);
});
