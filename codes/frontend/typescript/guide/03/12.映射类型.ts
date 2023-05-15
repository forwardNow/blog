type PropsKeys = 'x' | 'y' | 'z';

/*
  { x: number, y: number, z: number }
 */
type Type = {
  [Key in PropsKeys]: number;
}
