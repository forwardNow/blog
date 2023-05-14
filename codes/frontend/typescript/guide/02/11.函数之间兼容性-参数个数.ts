type F1 = (a: number) => void;
type F2 = (a: number, b: number) => void;

let f1: F1 = (a) => a;
let f2: F2;

f2 = f1;


let arr = [1, 2, 3];
arr.forEach(() => {});
arr.forEach((item) => {});
arr.forEach((item, index) => {});
arr.forEach((item, index, array) => {});
