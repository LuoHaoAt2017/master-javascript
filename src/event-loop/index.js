// 假死状态

window.onload = function() {
    const root = document.getElementById('btn');
    let counter = 1;
    setTimeout(() => {
        while (counter) {
            counter++;
        }
    }, 5000);
    root.addEventListener('click', function() {
        console.log('end loop');
    });
}