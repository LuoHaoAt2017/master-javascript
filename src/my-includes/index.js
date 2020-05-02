Array.prototype.myincludes = function(target, fromIndex) {
    const list = this;
    for(let i = fromIndex; i < list.length; i++) {
        if (target === list[i]) {
            return true;
        }
    }
    return false;
}

const list = [1, 3, 5, 7, 9, 0];
const res = list.myincludes(7, 4);
console.log('res: ', res);