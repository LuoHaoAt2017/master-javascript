// 链表的创建和链表的遍历
// 删除的核心：找到目标节点的前驱节点。

function Node(value) {
    this.value = value;
    this.next = null;
}

const N = 9;
const head = new Node(N);
let p = head;
for(let i = 0; i < 9; i++) {
    let value = Math.floor(Math.random()*10);
    const node = new Node(value);
    p.next = node;
    p = p.next;
}

p = head.next;
while(p) {
    console.log(p.value);
    p = p.next;
}

// 删除链表中所有值为5的节点
p = head;
while (p && p.next) {
    if (p.next.value === 5) {
        p.next = p.next.next;
    } else {
        p = p.next;
    }
}
console.log('-------------------------');
p = head.next;
while(p) {
    console.log(p.value);
    p = p.next;
}