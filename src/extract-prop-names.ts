/**
 * Given an object type T, return a type of property names whose values are assignable to type S
 *
 * @example
 * ```ts
 *
 * interface Foo {
 *   a: string;
 *   b: boolean;
 *   c: number[];
 *   d: Array<Promise<string>>;
 * }
 *
 * const stringProps: ExtractPropertyNamesOfType<Foo, string> // type: 'a'
 *   = 'a';
 *
 * const arrayProps: ExtractPropertyNamesOfType<Foo, any[]> // type: 'c' | 'd'
 *   = 'c';
 *
 * const notArrayProps: Exclude<keyof Foo, ExtractPropertyNamesOfType<Foo, any[]>> // type: 'a' | 'b'
 *   = 'a';
 * ```
 *
 * This can be very useful when used in combination with TypeScript's `Pick<T>` utility type
 *
 * @example
 * ```ts
 *
 * interface Foo {
 *   a: string;
 *   b(): boolean;
 *   c: number[];
 *   d: Array<Promise<string>>;
 * }
 *
 * // Extract from Foo, an object containing only properties with array values
 * let x: Pick<Foo, ExtractPropertyNamesOfType<Foo, any[]>>
 *   = { c: 42, d: [] as Array<Promise<string>> };
 *
 * // Get a type with only Foo's methods
 * let fooMethods: Pick<Foo, ExtractPropertyNamesOfType<Foo, (...args: any[]) => any>>
 *   = { b() { return true; } };
 * ```
 */
export type ExtractPropertyNamesOfType<T, S> = {
  [K in keyof T]: T[K] extends S ? K : never
}[keyof T];
