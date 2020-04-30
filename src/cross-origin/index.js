
function ajax(config, cb) {
    const xhr = createXHR();
     // step0: 检测状态变化
    xhr.onreadystatechange = function() {
        // statechange=0, 未初始化
        // statechange=1，启动，已经启动open方法。
        // statechange=2，发送，已经启动send方法。
        // statechange=3，开始接收到服务器响应。
        // statechange=4，接收到全部响应数据。
        if (xhr.readyState === 2) {
            setTimeout(() => {
                xhr.abort();
            }, config.timeout);
        } else if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                cb(xhr.responseText);
            } else {
                console.error('status: ', xhr.status);
            }
        }
    }
    xhr.open(config.type, config.url, config.async); // step1: 准备请求 params: method, url, async
    xhr.send(config.data); // step2: 发送请求
}

function createXHR() {
    if (window.XMLHttpRequest !== undefined) {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject('Microsoft.XMLHTTP');
    }
}
const baidu = 'http://test-api.truckerpath.com//jobs-v2-api/v1/third/party/search/record';
const nczonline = 'http://www.nczonline.net';
window.onload = function () {
	ajax({
		type: 'get',
		url: baidu, 
		async: true,
        timeout: 3000
	}, function(resp) {
        const app = document.getElementById("app");
        resp = JSON.parse(resp);
        const locations = resp.data.hotLocation;
        const list = document.createElement('ul');
        // 优化DOM操作：减少DOM访问。
        const fragment = document.createDocumentFragment();
        locations.forEach(function(elem) {
            const item = document.createElement('li');
            item.innerText = elem.state;
            fragment.appendChild(item);
        });
        list.appendChild(fragment);
        app.appendChild(list);
	});
};
