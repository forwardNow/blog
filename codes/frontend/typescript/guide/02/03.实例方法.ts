class Point {
  x = 10;
  y = 20;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

const p = new Point();

p.scale(10);

console.log(p.x, p.y);

