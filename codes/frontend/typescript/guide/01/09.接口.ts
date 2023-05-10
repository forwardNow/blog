interface IPerson {
  name: string;
  sayHi(): void;
}

let person: IPerson = {
  name: '张三',
  sayHi() {
    console.log(this.name, 'hi');
  }
}

type IStudent = {
  name: string;
  sayHi(): void;
}

let student: IStudent = {
  name: '张三',
  sayHi() {
    console.log(this.name, 'hi');
  }
}

type StrNum = string | number;
