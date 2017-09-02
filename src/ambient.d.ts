declare type opaque = {} | void | undefined | null | 0 | '';
declare type Option<T> = T | null;

declare interface Dict<T = opaque> {
  [key: string]: T | undefined;
}

declare interface Constructor<T = opaque> {
  new(...args: any[]): T;
}
