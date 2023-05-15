interface IPerson { name: string; age: number; }

/*
  { readonly name: string, readonly age: number }
 */
type ReadonlyPerson = Readonly<IPerson>;
