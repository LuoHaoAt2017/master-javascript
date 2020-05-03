// js方法中的push和unshift的区别
// push向数组中从前往后添加元素
// unshift向数组中首部添加数据，数组中原有的元素往后移动。
// pop从数组尾部删除元素
// shift从数组首部删除元素

// 栈数: unshift pop
// 队列: push shift

// O(n) 时间复杂度
// S(n) 空间复杂度

var reverseWords = function(s) {
    var words = [];
    s.split(" ").forEach(function(elem) {
    	const item = elem.trim();
        item && words.unshift(item);
    });
    return words.join(" ");
};

var str1 = "the sky is blue";
var str2 = "a good   example";
var res = reverseWords(str2);
console.log("reverse-words", res);