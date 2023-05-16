declare let count: number;

interface Point {
  x: number,
  y: number,
}

declare let position: Point;

declare let changePosition: (point: Point) => void;

declare function add(num1: number, num2: number): number

export {
  count,
  position,
  changePosition,
  add,
}
