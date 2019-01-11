//首先启动index02.js，它是服务器。

var util = require('util');
var fs = require('fs');
var request = require('request');

var EventEmitter = require('events').EventEmitter;

//对象构造函数
function ClickFunction() {}

//ClickFunction继承EventEmitter
util.inherits(ClickFunction, EventEmitter);

//在原型上添加方法
ClickFunction.prototype.clickMethod = function() {
  //传递参数
  this.emit('clickEvent', {color: 'red'});
}

//创建实例并且在对象实例中监听事件
var clickFunction = new ClickFunction();
clickFunction.on('clickEvent', handler);

//handler函数中的参数是从哪里来的呢？clickEvent。
function handler(args) {
  console.log('args', args)
  setTimeout(requestHandle, 1000);
}

function requestHandle() {
  request('http://localhost:8080', function(err, res, body) {
    /**
     * 为了挽救回调函数的脆弱性，设计出了错误和成功相分离的作品。
     * 如果请求出错，err置真，充填错误信息，res就置空。
     */
    if (err) { throw err; }
    fs.createWriteStream('./output/hello.txt').write(body);
  });
}

clickFunction.clickMethod();

/**
 * 硬编码回调的脆弱性
 * 如果网络请求发生错误，那么程序就不会按预期的将body写进可写流。
 * 
 * request是一个插件，来自于第三方。如果不开源，你就不知道它的内部执行逻辑。
 * 虽然你传递了一个回调函数，但是执不执行，何时执行，执行几次都是未知的，都是不可控的。
 * 这就是回调函数最核心的一个问题：信任问题。尤其是涉及到支付回调。
 * 第三方插件导致的控制反转问题 ===> 信任问题
 */