function ajax(config, cb) {
    const xhr = createXHR();
    xhr.onreadystatechange = function() {
        // statechange=0, 未初始化
        // statechange=1，启动，已经启动open方法。
        // statechange=2，发送，已经启动send方法。
        // statechange=3，开始接收到服务器响应。
        // statechange=4，接收到全部响应数据。
        if (xhr.readyState === 1) {
        } else if (xhr.readyState === 2) {
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
    xhr.open(config.type, config.url, config.async);
    xhr.send(config.data);
}

function createXHR() {
    if (window.XMLHttpRequest !== undefined) {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject('Microsoft.XMLHTTP');
    }
}

const truckerpath = 'http://test-api.truckerpath.com//jobs-v2-api/v1/third/party/search/record';
const jiumo = 'https://www.jiumodiary.com/images/wechat_public_barcode3.gif';

function loadtruckerpath() {
	ajax({
		type: 'get',
		url: truckerpath, 
		async: true,
        timeout: 3000,
        header: {},
        // data: "user=admin"
	}, function(resp) {
        const app = document.getElementById("app");
        resp = JSON.parse(resp);
        const locations = resp.data.hotLocation;
        const list = document.createElement('ul');
        // 优化DOM操作：减少DOM访问。
        const fragment = document.createDocumentFragment();
        locations && locations.forEach(function(elem) {
            const item = document.createElement('li');
            item.innerText = elem.state;
            fragment.appendChild(item);
        });
        list.appendChild(fragment);
		app.appendChild(list);
		
	});
}

function useImg() {
    // jsonp方式实现跨域,只能够实现get请求。
    // 通过标签去实现get请求的跨域。不支持其它的方法。
    const img = document.createElement('img');
    img.src = jiumo;
    document.body.appendChild(img);
}

function useScript() {
    // 接口成功返回结果但是浏览器无法读取
    const script = document.createElement('script');
    script.src = truckerpath;
    document.body.appendChild(script);
}

function getHello() {
    ajax({
		type: 'get',
		url: 'http://192.168.1.3:3000/hello', 
		async: true,
	}, function(resp) {
        debugger;
	});
}

window.onload = function () {
    getHello();
};
