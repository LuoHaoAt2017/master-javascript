常见跨源问题有:

跨子域
跨全域
跨协议(HTTP与HTTPS)

父窗口与iframe之间通信
多个iframe之间通信

在跨文档通信中, 一切消息都是以字符串形式存在, 可以视其为"报文", 因此负责派送和接受信件的角色, 我们称其为"信使"(Messenger).

Messenger的职责很简单, 主要分为 发送消息(send) 与 监听消息(listen), 而消息的内容都是字符串. 实际使用中, 最好不要直接使用简单的字符串, 而建议使用结构化的消息(JSON String). 具体逻辑请自行实现: 发送前将json内容stringify, 收到后进行parse, 以实现消息内容的扩展性.

参考资料：https://github.com/biqing/MessengerJS