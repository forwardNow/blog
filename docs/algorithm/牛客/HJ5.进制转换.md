# HJ5 进制转换

[https://www.nowcoder.com/practice/8f3df50d2b9043208c5eed283d1d4da6](https://www.nowcoder.com/practice/8f3df50d2b9043208c5eed283d1d4da6)

## 描述

写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。

输入描述：

输入一个十六进制的数值字符串。

输出描述：

输出该数值的十进制字符串。不同组的测试用例用\n隔开。

示例1:

```text
输入： 0xAA
输出： 170
```

## 解答

```javascript
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const line = await readline()
    let num = parseInt(line, 16)

    console.log(num);
})();
```