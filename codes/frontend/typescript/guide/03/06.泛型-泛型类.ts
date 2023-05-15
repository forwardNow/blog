class GenericNumber<T> {
  defaultValue: T;

  constructor(value: T) {
    this.defaultValue = value;
  }

  add(num: T): T {
    return this.defaultValue;
  }
}

// 显式设置类型变量的值
let n1 = new GenericNumber<number>(10);

// 类型推论
let n2 = new GenericNumber(10);
