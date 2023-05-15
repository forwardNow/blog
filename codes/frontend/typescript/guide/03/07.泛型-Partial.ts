interface IPerson { name: string; age: number; }

/*
  { name?: string, age?: number }
 */
type PartialPerson = Partial<IPerson>;
