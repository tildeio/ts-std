export type unknown = {} | void | undefined | null | 0 | '';
export type Option<T> = T | null;
export type Maybe<T> = T | void | undefined | null;

export interface Dict<T = unknown> {
  [key: string]: T | undefined;
}

export interface Constructor<T = unknown> {
  new(...args: any[]): T;
}
