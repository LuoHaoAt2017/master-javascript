// localStorage只能存储字符串健值对
// 如果要存储一个对象，首先需要将对象转换成字符串JSON.stringify

// 要访问同一个localStorage，页面必须来自同一个域名，同一种协议，同一个端口上。
// 因此不同的项目之间localStorage是无法共享的

// 每一个来源的localStorage的容量限制普遍是2.5m，部分浏览器是5m。
// 容量超出的情况还是比较常见的，这一点要注意。

function StorageUtil() {
}

StorageUtil.set = function (name, value) {
	value = JSON.stringify(value);
	localStorage.setItem(name, value);
};

StorageUtil.get = function (name) {
	return JSON.parse(localStorage.getItem(name));
};
