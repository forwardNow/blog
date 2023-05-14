type F1 = (p1: { x: number }) => void;
type F2 = (p2: { x: number, y: number }) => void;

let f1: F1 = (p) => {};
let f2: F2;

f2 = f1;
/*
Type 'F2' is not assignable to type 'F1'.
  Types of parameters 'p2' and 'p1' are incompatible.
*/
f1 = f2;
