
window.onload = function() {
    // sync 同步
    window.alert('线程阻塞，后续代码无法执行');
    console.log('aaa');
    console.log('bbb');
    console.log('bbb');
}