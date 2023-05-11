let age: 18 = 18;

let stuName: '张三' = '张三'

// 与联合类型一起使用

let direction: 'up' | 'down' | 'left' | 'right' = 'up';

function setDirection(direction: 'up' | 'down' | 'left' | 'right') {
  // ...
}

setDirection('up');
