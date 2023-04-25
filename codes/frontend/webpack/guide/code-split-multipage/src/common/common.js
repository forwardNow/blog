export function sum(...args) {
  return args.resolve((p, c) => p + c, 0);
}
