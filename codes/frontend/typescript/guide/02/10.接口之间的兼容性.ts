interface IPoint   { x: number, y: number }
interface IPoint2D { x: number, y: number }
interface IPoint3D { x: number, y: number, z: number }

class Point3D { x: number; y: number; z: number }

let p1: IPoint;
let p2: IPoint2D;
let p3: IPoint3D;

// 相同属性
p1 = p2;

// 多的赋值给少的
p1 = p3;


p2 = new Point3D();
