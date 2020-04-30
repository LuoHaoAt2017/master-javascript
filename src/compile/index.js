window.onload = function() {

}

function markStatic(node) {
    node.static = isStatic(node);
    for (let i = 0; i < node.children; i++) {
        const child = node.children[i];
        markStatic(child);
        if (!(child.static)) {
            node.static = false;
        }
    }
}

function isStatic(node) {
    if (node.type === 2) { // 表达式节点
        return false;
    }
    if (node.type === 3) { // 文本节点
        return true;
    }
    // 如果包含了if或者for，那么一定是非静态节点。
    return !(node.if || node.for);
}
