diff算法的时间复杂度是O(n)

patch

sameNode: tag, key, data, type(input)

只有sameNode为真的情况下，patchNode才会执行。

patchNode: 参数更新前的虚拟节点和更新后的虚拟节点。
当节点是文本节点时比较好处理，
当节点不是文本节点时，需要对节点的子节点进行更新处理：updateChildren。
