interface Point2D {
  x: number;
  y: number;
}

interface Point3D extends Point2D {
  z: number;
}

const p: Point3D = { x: 1, y: 2, z: 3 };
