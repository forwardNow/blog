interface A { x: string }

/*
TS2430: Interface 'B' incorrectly extends interface 'A'.
  Types of property 'x' are incompatible.
    Type 'number' is not assignable to type 'string'.
 */
interface B extends A { x: number }


interface C { x: string }
interface D { x: number }

type E = C & D;

// (property) x: never
let e: E = { x: 1 };

