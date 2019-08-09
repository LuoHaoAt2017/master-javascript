document.onload = function (ev) {
	const routes = [
		{
			name: "操作系统",
			path: "operation",
			component: "<h1>操作系统</h1>"
		},
		{
			name: "计算机网络",
			path: "network",
			component: "<h1>操作系统</h1>"
		},
		{
			name: "软件工程",
			path: "software",
			component: "<h1>操作系统</h1>"
		}
	];

	const links = document.querySelectorAll('a');
	links.forEach(link => {
		link.addEventListener("click", function (ev) {
			ev.preventDefault();
			const href = this.getAttribute("href");
			console.log(ev.target)
			//window.location.hash = href;
		});
	});

	window.addEventListener("hashchange", function (ev1) {
		//routeChange();
	});

	function routeChange() {
		const currHash = window.location.hash;
		debugger
		const content = document.querySelector("content");
		const route = routes.find(function (route) {
			return currHash === "#" + route.path;
		});
		content.innerHTML = route && route.component || "<h1>error</h1>";
	}
}
