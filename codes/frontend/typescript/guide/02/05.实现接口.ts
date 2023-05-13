interface Singable {
  sing(): void;
}

class Person implements Singable {
  sing() {
    console.log('你是我的小苹果！');
  }
}
