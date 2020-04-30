window.onload = function () {
	const app = document.getElementById("app");
	app.addEventListener('click', handleClick);
	// 不需要的时候可以考虑移除事件
	app.removeEventListener('click', handleClick);
};

function handleClick(evt) {
	console.log('事件是在哪一个dom触发的', evt.target.id);
	console.log('事件是在哪一个阶段处理的', evt.eventPhase);
	console.log('事件是由哪一个dom处理的', evt.currentTarget);
	evt.stopPropagation();
	evt.cancelBubble = true;
	switch (evt.target.id) {
		case 'level-1': handleElemClick(); break;
		case 'level-2': handleElemClick(); break;
		case 'level-3': handleElemClick(); break;
		case 'chrome': handleElemClick(); break;
		case 'opera': handleElemClick(); break;
		case 'safari': handleElemClick(); break;
		case 'firefox': handleElemClick(); break;
		case 'ie': handleElemClick(); break;
		default: handleUnknownClick();
	}
}

function handleElemClick() {
	console.log('handle level click');
}

function handleUnknownClick() {
	console.log('handle browser click');
}
