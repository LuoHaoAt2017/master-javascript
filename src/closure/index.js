function test() {
    const person = {
        username: 'xxx',
        password: '123'
    }
    return person;
}
const person = test();
// console.log('不是预期中的undefine: ', person);

function counter() {
    let counts = 0;
    return function() {
        counts++;
        return counts;
    }
}

const increment = counter();
console.log('increment1: ', increment());
console.log('increment2: ', increment());
console.log('increment3: ', increment());
