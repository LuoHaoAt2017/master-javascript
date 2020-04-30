// cookie的信息构成：健，值，域，路径，失效时间，安全标志(secure)
// 其中域，路径，失效时间，安全标志是服务器返回给客户端的提示
// 健值对才会发送给服务器

// cookie和域名相绑定，一个域名下可能有多个cookie，一般一个域名下cookie的数量限制在20-30个。
// 大多数浏览器将单个cookie的长度限制在4k之内。

// 客户端接根据响应头中的Set-Cookie创建以及删除cookie。
// 客户端向某个域发送请求时会将和这个域名绑定的cookie以Cookie的形式写进请求头中。

// Cookie: name1=value1;name2=value2;name3=value3;
// 所有的name和value需要通过encodeURIComponent和decodeURIComponent编解码
// 当浏览器关闭的时候会话停止，此次会话相关的cookie默认删除。

// cookie原生的操作比较操蛋，实际项目中推荐使用js-cookie。
