const ejs = require('ejs');

// 模板
const template = 'My name is <%= name %>'; 

// 也可以将字符串编译成函数
// const template = ejs.compile('My name is <%= name %>')

// 数据
const data = {
  name: '张三',
};

// 渲染
const html = ejs.render(template, data);

console.log(html);
//=> My name is 张三