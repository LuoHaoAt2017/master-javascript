window.onload = function () {
	Ajax({
		type: 'get', 
		url: 'http://www.baidu.com', 
		async: true,
		timeout: 3000
	}, function(resp) {
		const app = document.getElementById("app");
		app.innerText = resp;
	});
};
