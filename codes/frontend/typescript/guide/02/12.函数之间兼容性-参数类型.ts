type F1 = (a: number) => void;
type F2 = (b: number) => void;

let f1: F1 = (x) => x;
let f2: F2;

f2 = f1;
