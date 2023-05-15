type Props = { x: number, y: number, z: number }

/*
  { x: number, y: number, z: number }
 */
type Type = {
  [Key in (keyof Props)]: number;
};


type Type2 = keyof { x: number, y: number };
