Array.prototype.mymap = function(cb) {
    const context = this;
    let len = context.length;
    const list = [];
    for(let i = 0; i < len; i++) {
        list.push(cb(context[i], i, context));
    }
    return list;
}

const nodes = [1, 2, 3];
const lists = nodes.mymap(function(elem) {
    return elem * 2;
});
console.log(lists.join(', '));