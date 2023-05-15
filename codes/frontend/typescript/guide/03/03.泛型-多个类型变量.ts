/*
  keyof 对象
    生成对象键名称的联合类型
    如 typeof { name: '1', age: 2 } => 'name' | 'age'
 */
function getProp<Type, Key extends (keyof Type)>(obj: Type, key: Key) {
  return obj[key];
}

let stuName: string = getProp({ name: '张三', age: 18 }, 'name');
let age: number = getProp({ name: '张三', age: 18 }, 'age');
