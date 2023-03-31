# 剑指 Offer 32 - II. 从上到下打印二叉树 II

## 描述

从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

例如:

给定二叉树: [3,9,20,null,null,15,7],

```text
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```text
[
  [3],
  [9,20],
  [15,7]
]
```

链接：https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    return solution2(root);
};

/*
    每次迭代，
        当前 queue 的长度就是当前层的节点个数（currentLevelSize）
        依次遍历并出队 从 0 到 currentLevelSize 的节点
 */
function solution2(root) {
    const queue = [];
    const res = [];

    if (!root) {
        return [];
    }

    queue.push(root);

    while(queue.length > 0) {
        res.push([]);

        const currentLevelSize = queue.length;

        for (let i = 0, len = currentLevelSize; i < len; i++) {
            const node = queue.shift();
            const { val, left, right } = node;

            res[res.length - 1].push(val);

            if (left) {
                queue.push(left);
            }

            if (right) {
                queue.push(right);
            }
        }
    }

    return res;
}

/*
    给每个 node 添加当前节点的层数（index）
    node 的子节点的层数为 index + 1
 */
function solution1(root) {
    const queue = [];
    const res = [];

    if (!root) {
        return [];
    }

    root.index = 0;

    queue.push(root);

    while(queue.length > 0) {
        const node = queue.shift();

        const { val, left, right, index } = node;

        if (!res[index]) {
            res[index] = [];
        }

        res[index].push(val);

        if (left) {
            left.index = index + 1;
            queue.push(left);
        }

        if (right) {
            right.index = index + 1;
            queue.push(right);
        }
    }

    return res;
};
```