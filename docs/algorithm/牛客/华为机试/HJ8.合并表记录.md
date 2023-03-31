# HJ8 合并表记录

[https://www.nowcoder.com/practice/de044e89123f4a7482bd2b214a685201](https://www.nowcoder.com/practice/de044e89123f4a7482bd2b214a685201)

## 描述

数据表记录包含表索引index和数值value（int范围的正整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照index值升序进行输出。

输入描述：

先输入键值对的个数n（1 <= n <= 500）
接下来n行每行输入成对的index和value值，以空格隔开

输出描述：

输出合并后的键值对（多行）


示例1：

```text
输入：
4
0 1
0 2
1 2
3 4

输出：
0 3
1 2
3 4
```

示例2：

```text
输入：
3
0 1
0 2
8 9

输出：
0 3
8 9
```

## 解答

```javascript
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let line;
    const items = [];
    while(line = await readline()){
        items.push(line);
    }

    items.shift();

    solution1(items);
}()

// 运行时间 80ms 占用内存 9136KB
function solution1(items) {
    const map = new Map();

    items.forEach((item) => {
        const [key, val] = item.split(' ').map(i => Number(i));

        if (map.has(key)) {
            map.set(key, map.get(key) + val);
        } else {
            map.set(key, val);
        }
    });

    const keys = Array.from(map.keys());

    const sortedKeys = keys.sort((a, b) => a - b);

    sortedKeys.forEach((key) => {
        const val = map.get(key);
        console.log(`${key} ${val}`);
    })
}


// 运行时间 529ms 占用内存 8872KB
function solution2(items) {
    const arr = [];

    items.forEach((item) => {
        const [index, value] = item.split(' ').map(i => Number(i));

        if (arr[index] !== undefined) {
            arr[index] = arr[index] + value;
        } else {
            arr[index] = value;
        }
    });

    arr.forEach((value, index) => {
        if (value === undefined) {
            return;
        }
        console.log(index + ' ' + value);
    });
}
```