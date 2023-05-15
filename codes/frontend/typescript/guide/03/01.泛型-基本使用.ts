function id<Type>(value: Type): Type {
  return value;
}

let num: number = id<number>(123);
let str: string = id<string>('a');
