function add(num1: number, num2: number): number {
  return num1 + num2;
}

const sum = function (num1: number, num2: number): number {
  return num1 + num2;
}

const sum2 = (num1: number, num2: number): number  => {
  return num1 + num2;
}

// 声明时，指定类型
let getSum: (num1: number, num2: number) => number;

// 赋值
getSum = (num1, num2) => {
  return num1 + num2;
}
