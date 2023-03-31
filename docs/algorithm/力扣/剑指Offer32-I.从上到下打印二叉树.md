# 剑指 Offer 32 - I. 从上到下打印二叉树

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如:

给定二叉树: [3,9,20,null,null,15,7],

```text
    3
   / \
  9  20
    /  \
   15   7
```

返回：

[3,9,20,15,7]

链接：https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof

## 解答

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    const queue = [];
    const result = [];

    if (!root) {
        return [];
    }

    queue.push(root);

    while(queue.length > 0) {
        const node = queue.shift();
        const { val, left, right } = node;

        result.push(val);

        if (left) {
            queue.push(left);
        }

        if (right) {
            queue.push(right);
        }
    }

    return result;
};
```

算法流程：

1. 特例处理： 当树的根节点为空，则直接返回空列表 [] ；
2. 初始化： 打印结果列表 res = [] ，包含根节点的队列 queue = [root] ；
3. BFS 循环： 当队列 queue 为空时跳出；
   1. 出队： 队首元素出队，记为 node；
   2. 打印： 将 node.val 添加至列表 tmp 尾部；
   3. 添加子节点： 若 node 的左（右）子节点不为空，则将左（右）子节点加入队列 queue ；
4. 返回值： 返回打印结果列表 res 即可。
