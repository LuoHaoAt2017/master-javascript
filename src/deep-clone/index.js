var deepCopy = function (o) {
    if (o instanceof Array) {
        var n = [];
        for (var i = 0; i < o.length; ++i) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    } else if (o instanceof Object) {
        var n = {}
        for (var i in o) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    } else {
        return o;
    }
}

const origin = [{ x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 1 }]
const target = deepCopy(origin);
console.log('target: ', target);