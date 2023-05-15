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
}


