// function id<Type>(value: Type[]): Type[] {
//   console.log(value.length);
//   return value;
// }


interface ILength { length: number }

// 类型变量 Type 要满足 ILength 的要求，即要求有 length 属性
function id<Type extends ILength>(value: Type): Type {
  console.log(value.length);
  return value;
}

id([1, 2, 3]);
id({ length: 2, '0': 1, '1': 2 });
