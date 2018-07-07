export type Absent = null | undefined | void;
export type Present = number | string | boolean | symbol | object;

export type Option<T> = T | null;
export type Maybe<T> = T | void | undefined | null;

export interface Dict<T = unknown> {
  [key: string]: T | undefined;
}

export type Indexable<T = unknown> = Readonly<Dict<T>>;

export interface Constructor<T = unknown> {
  new(...args: any[]): T;
}
