type Props = { x: number, y: string }

// type TypeX = number;
type TypeX = Props['x'];

let x: TypeX = 1;
