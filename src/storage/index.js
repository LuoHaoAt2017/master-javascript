// 将特定用户的信息存储在客户端上，减轻服务器的压力。

// 在客户端存储数据的方案，各种方案的特点和适用范围。

// 浏览器将cookie的信息放在请求头中发送给服务器。因此cookie的信息量不能太大。
// 每个域cookie的数量(30-50)和容量(4kb)限制。
// 如果cookie的尺寸超过的了限制那么就会丢弃。

function main() {
	const city = {
		location: '河南',
		landscape: '工商业',
		population: '五百万'
	};
	StorageUtil.set('city', city);
	console.log(StorageUtil.get('city'));
}
