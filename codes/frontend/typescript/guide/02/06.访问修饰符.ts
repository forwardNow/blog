class Animal {
  private name: string;

  protected move(): void {
    console.log('move');
  }

  public setName(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}

class Dog extends Animal {
  run() {
    this.move();
  }
}

const animal = new Animal();
const dog = new Dog();

// animal.move(); // 访问不了

console.log( animal.getName() );
