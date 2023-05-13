class Person {
  readonly name: string = '';

  // 如果不明确设置类型注解，则推论为字面量类型
  readonly age = 18;

  constructor(name: string, age: number) {
    this.name = name;
    // this.age = age;
  }
}

interface IPerson {
  readonly name: string;
}

let p1: IPerson = { name: '张三' };
// 不能修改
// p1.name = ''

let p2: { readonly name: string } = { name: '李四' };
// p2.name = ''
