const ejs = require('ejs');

const template = `<%# 删除空行 -%>
<ul>
  <%_ 
  persons.forEach((item) => {
    if (item.age < 18) {
      return;
    }
  _%>
    <li> <%= item.name %>, <%= item.age %> </li>
  <%_  
    }
  )
  _%>
</ul>
`; 

const data = {
  persons: [
    { name: 'zhangSan', age: 18 },
    { name: 'lisi', age: 19 },
    { name: 'wangwu', age: 16 },
    { name: 'zhaoliu', age: 20 },
  ],
};

const html = ejs.render(template, data);

console.log(html);