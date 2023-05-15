type Props = {
  x: number,
  y: string,
  z: boolean,
  i: number,
}

// 获取单个属性的类型
type Type1 = Props['x']; // number

// 获取多个属性类型
type Type2 = Props['x' | 'y']; // number | string

// 获取所有属性的类型
type Type3 = Props[keyof Props]; // number | string | boolean

