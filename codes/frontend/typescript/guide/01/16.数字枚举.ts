// 默认从 0 开始
enum Direction1 {
  Up,   // 0
  Down, // 1
  Left, // 2
  Right,// 3
}

// 指定第一个成员为 10，后面的成员自增从 10 开始
enum Direction2 {
  Up = 10,     // 10
  Down,  // 11
  Left,  // 12
  Right, // 13
}

enum Direction3 {
  Up = 10,    // 10
  Down = 11 , // 11
  Left = 22 , // 22
  Right,  // 23
}
