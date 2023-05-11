// 显式设置 any 类型，以下操作都没有提示
let a: any = {};
a.x;
a.y = 10;
a();
const n: number = a;

// 隐式 any 类型，声明变量 不给初始值、类型注解
let b;
b.x;
b.y = 10;
b();

// 隐式 any 类型，函数参数 不给类型注解
function add(num1, num2) {}
add(1, '2');

