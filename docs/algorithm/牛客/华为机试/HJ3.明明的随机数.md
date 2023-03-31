# HJ3 明明的随机数

[https://www.nowcoder.com/practice/3245215fffb84b7b81285493eae92ff0](https://www.nowcoder.com/practice/3245215fffb84b7b81285493eae92ff0)

## 描述

明明生成了 N个1到500之间的随机整数。
请你删去其中重复的数字，即相同的数字只保留一个，把其余相同的数去掉，然后再把这些数从小到大排序，按照排好的顺序输出

输入描述：

第一行先输入随机整数的个数 N 。 接下来的 N 行每行输入一个整数，代表明明生成的随机数。 具体格式可以参考下面的"示例"。

输出描述：

输出多行，表示输入数据处理后的结果

示例1：

```text
输入： 
  3
  2
  2
  1
输出：
  2
  1
```

## 解答

```javascript
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const nums = [];

    while(line = await readline()){
        nums.push(parseInt(line))
    }

    // 去掉首位
    nums.shift();

    const set = new Set(nums);

    const uniqNums = Array.from(set.values());

    // 如果直接使用 uniqNums.sort() 会超出空间限制
    const sortedNums = uniqNums.sort((a, b) => a - b);

    sortedNums.forEach((item) => console.log(item))
}()
```