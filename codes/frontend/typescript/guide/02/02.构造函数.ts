class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p = new Person('张三', 18);

console.log(p.name, p.age);
