# 剑指 Offer 32 - III. 从上到下打印二叉树 III

## 描述

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

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
  [20,9],
  [15,7]
]
```

链接：https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof

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
    const queue = [];
    const res = [];

    let isOrderLeft = true;

    if (!root) {
        return [];
    }

    queue.push(root);

    while(queue.length > 0) {
        const currentLevelRes = [];

        const currentLevelSize = queue.length;

        res.push(currentLevelRes);

        for (let i = 0; i < currentLevelSize; i++) {
            const node = queue.shift();
            const { val, left, right } = node;

            if (isOrderLeft) {
                currentLevelRes.push(val);
            } else {
                currentLevelRes.unshift(val);
            }

            if (left) {
                queue.push(left);
            }
            
            if (right) {
                queue.push(right);
            }
        }

        isOrderLeft = !isOrderLeft;
    }

    return res;
};
```