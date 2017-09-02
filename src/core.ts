export type opaque = {} | void | undefined | null | 0 | '';
export type Option<T> = T | null;

export interface Dict<T = opaque> {
  [key: string]: T | undefined;
}

export interface Constructor<T = opaque> {
  new(...args: any[]): T;
}
