interface IPerson { name: string; age: number; gender: string }

/*
  { name: string, age: number }
 */
type PickPerson = Pick<IPerson, 'name' | 'age'>;
