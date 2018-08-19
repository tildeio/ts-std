export function keys<T extends object>(obj: T): Array<keyof T> {
  return Object.keys(obj) as any;
}

export function values<T extends object>(obj: T): Array<T[keyof T]> {
  return keys(obj).map(k => obj[k]) as any;
}

const { hasOwnProperty } = Object.prototype;

export function* entries<T extends object>(obj: T): Iterable<[keyof T & (string | number), T[keyof T]]> {
  for (let key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      yield [key, obj[key]];
    }
  }
}

export function hasProperty<K extends string>(obj: unknown, key: K): obj is { [P in K]: unknown } {
  return key in (obj as any);
}

/**
 * Given an object type, make one or more properties non-optional
 *
 * @example
 * ```ts
 *
 * interface Foo {
 *  a: string;
 *  b?: boolean;
 *  c: number[];
 *  d?: [string, number];
 * }
 *
 * const x: RequiredProps<Foo, 'a' | 'b'> = {
 *   a: 'hello world', // STILL required
 *   b: true,          // -NOW- required
 *   c: [1, 2, 3],     // still required
 *   d: ['apples', 4], // still optional
 * };
 * ```
 */
export type RequiredProps<T, K extends keyof T> = T & { [L in K]-?: T[K] };

/**
 * Given an object type, make one or more properties optional
 *
 * @example
 * ```ts
 *
 * interface Foo {
 *  a: string;
 *  b?: boolean;
 *  c: number[];
 *  d?: [string, number];
 * }
 *
 * const y: OptionalProps<Foo, 'c'> = {
 *   a: 'hello world', // still required
 *   b: true,          // still optional
 *   c: [1, 2, 3],     // -NOW- optional
 *   d: ['apples', 4], // still optional
 * };
 * ```
 */
export type OptionalProps<T, K extends keyof T> = { [L in K]?: T[L] } & Pick<T, Exclude<keyof T, K>>;
