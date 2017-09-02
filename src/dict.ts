export function dict<T = opaque>(): Dict<T> {
  return Object.create(null);
}

const { hasOwnProperty } = Object.prototype;

export function has(d: Dict, key: string): boolean {
  return hasOwnProperty.call(d, key);
}
