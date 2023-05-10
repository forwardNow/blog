let person: {
  // 属性
  name: string;

  // 方法
  sayHi(name: string): void

  sayHello: (name: string) => void // 箭头函数形式
} = {
  name: '张三',

  sayHi(name) {
    console.log(name, 'hi');
  },

  sayHello(name) {
    console.log(name, 'hello');
  }
}

let student: {
  name: string;
  age?: number;
};

student = { name: '张三' };
student = { name: '张三', age: 18 };
