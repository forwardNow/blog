class Animal {
  move() {
    console.log('move');
  }
}

class Dog extends Animal {
  name = '二哈';
  bark() {
    console.log('汪汪');
  }
}

const dog = new Dog();
dog.move();
dog.bark();
console.log(dog.name);
