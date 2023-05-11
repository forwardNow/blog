/*
编译为 JS：

  var Direction1;
  (function (Direction1) {
    Direction1["Up"] = "UP";
    Direction1["Down"] = "DOWN";
    Direction1["Left"] = "LEFT";
    Direction1["Right"] = "RIGHT";
  })(Direction1 || (Direction1 = {}));

 */
enum Direction1 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}


/*
编译为 JS：

  var direction = 'UP';

 */
type Direction2 = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
let direction: Direction2 = 'UP';
