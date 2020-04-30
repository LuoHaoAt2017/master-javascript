

function main() {
	const rivers = ['幼发拉底河', '底格里斯河', '恒河', '印度河', '黄河', '长江', '多瑙河'];
	const N = rivers.length;
	const doc = document;
	const ul = doc.createElement('ul');
	for (let i = 0; i < N; i++) {
		const li = doc.createElement('li');
		li.innerText = rivers[i];
		ul.appendChild(li);
	}
	doc.body.appendChild(ul);
}
