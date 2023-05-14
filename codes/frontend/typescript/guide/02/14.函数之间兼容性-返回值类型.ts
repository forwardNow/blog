type F1 = () => string;
type F2 = () => string;

let f1: F1;
let f2: F2;

// f1 = f2;
f2 = f1;


type F3 = () => { a: number };
type F4 = () => { a: number, b: string };

let f3: F3;
let f4: F4;

f3 = f4;
// f4 = f3; // 不行
