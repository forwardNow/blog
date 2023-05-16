let count = 10;

let position = {
  x: 0,
  y: 0,
}

let changePosition = (point) => {
  position = point;
  console.log('当前坐标点', position);
}

function add(num1, num2) {
  return num1 + num2;
}

export {
  count,
  position,
  changePosition,
  add,
}

