interface IStudent<Type> {
  id: Type;
  getId(): Type;
  setId(id: Type): Type;
}

let stu: IStudent<string> = {
  id: '123',
  getId(): string {
    return this.id;
  },
  setId(id: string): string {
    this.id = id;
    return this.id;
  }
}

