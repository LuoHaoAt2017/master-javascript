// this是在函数被调用时绑定，this指向哪里完全取决于函数的【调用位置】，和函数的【声明位置】没有任何关系。
// this是在函数被调用时绑定，this指向哪里完全取决于函数的【调用位置】，和函数的【声明位置】没有任何关系。
// this是在函数被调用时绑定，this指向哪里完全取决于函数的【调用位置】，和函数的【声明位置】没有任何关系。
// this是在函数被调用时绑定，this指向哪里完全取决于函数的【调用位置】，和函数的【声明位置】没有任何关系。
// this是在函数被调用时绑定，this指向哪里完全取决于函数的【调用位置】，和函数的【声明位置】没有任何关系。
// this是在函数被调用时绑定，this指向哪里完全取决于函数的【调用位置】，和函数的【声明位置】没有任何关系。

// 如何找出函数的调用位置？寻找调用栈 call stack。
// 当前正在执行的函数的前一个调用。

// this的绑定规则

function registerEvents() {
    // JS性能优化之事件委托：事件愈多页面的响应性就愈差。
    const app = document.getElementById("app");
    const that = this;
    app.addEventListener("click", function onClick(evt) {
        // 此处进行了三次属性查找，时间复杂度是3O(n)。
        const origin = evt.target.dataset.clickOrigin;
        // 使用switch...case代替if...else
        console.log(`onClick是在addEventListener函数处调用，addEventListener是app上的方法，因此this指向app `, this);
        switch(origin) {
            case 'antv': handleAntv.call(window); break;
            case 'echart': handleEchart.call(window); break;
            case 'hchart': handleHchart.call(window); break;
            default: console.error("unknown origin");
        }
    });
}

function handleAntv() {
    window.location.href = 'https://antv.gitee.io/zh';
}

function handleEchart() {
    window.location.href = 'https://www.echartsjs.com/zh/index.html';
}

function handleHchart() {
    window.location.href = 'https://www.highcharts.com.cn/demo/highcharts';
}

function main() {
    this.registerEvents();
}

// 默认绑定
// 当函数作为在全局中作为独立函数调用，
// 在严格模式下，this和全局对象解绑，此时this指向unidentifed
// 在非严格模式下，this指向全局对象。

// 隐式绑定
// 当函数是某个对象的方法时，函数中的this指向的就是这个上下文对象。
// registerEvents函数中addEventListener函数的是app的方法，
// 因此在addEventListener内部调用onClick方法，onClick中的this指向app。

