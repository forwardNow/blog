interface AnyObject {
  /*
    key 为占位符，可以为任意的标识符
    对象中的属性名称都为字符串
   */
  [key: string]: number
}

let obj: AnyObject = {
  a: 1,
  b: 2,
};


([1, 2]).forEach(() => {});


interface MyArray<T> {
  [index: number]: T;
}

let arr: MyArray<number> = [1, 2]
console.log( arr[0] );
