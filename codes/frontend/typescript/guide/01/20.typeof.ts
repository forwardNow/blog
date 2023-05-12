console.log( typeof 'hello' ); // "string"

let person: { name: string, age: number } = { name: '张三', age: 18 };

/* 等价于：
  let p2: { name: string, age: number } = { name: '李四', age: 19 };
 */
let p2: typeof person = { name: '李四', age: 19 };

/* 等价于：
  let p2Name: string = '李四';
 */
let p2Name: typeof person.name = '李四';

