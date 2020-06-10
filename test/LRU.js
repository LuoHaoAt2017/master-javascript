// 最近最少使用算法
function LRUCache(capacity) {
	this.caches = {};
	this.cached = [];
	this.max = capacity || 3;
}

LRUCache.prototype.get = function (key) {
	let index = this.cached.indexOf(key);
	if(index === -1) {
		return -1;
	}
	this.cached.splice(index, 1);
	this.cached.unshift(key);
	return this.caches[key];
};

LRUCache.prototype.put = function (key, value) {
	let index = this.cached.indexOf(key);
	if(index === -1) {
		this.cached.unshift(key);
		this.caches[key] = value;
	} else {
		this.cached.splice(index, 1);
		this.cached.unshift(key);
		this.caches[key] = value;
	}
	if(this.max < this.cached.length) {
		this.cached.pop();
		delete this.caches[key];
	}
};

LRUCache.prototype.print = function () {
	console.log(this.cached.join(', '));
};

const keepAlive = new LRUCache(3);
keepAlive.put('aaa', {
	name: 'component-aaa'
});
keepAlive.put('bbb', {
	name: 'component-bbb'
});
keepAlive.put('ccc', {
	name: 'component-ccc'
});
keepAlive.get('aaa');
keepAlive.get('ccc');
keepAlive.print();
keepAlive.put('ddd', {
	name: 'component-ccc'
});
keepAlive.print();
