export function keys<T extends object>(obj: T): Array<keyof T> {
  return Object.keys(obj) as any;
}

export function values<T extends object>(obj: T): Array<T[keyof T]> {
  return keys(obj).map(k => obj[k]) as any;
}

const { hasOwnProperty } = Object.prototype;

export function* entries<T extends object>(obj: T): Iterable<[keyof T, T[keyof T]]> {
  for (let key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      yield [key, obj[key]];
    }
  }
}

export function hasProperty<K extends string>(obj: unknown, key: K): obj is { [P in K]: unknown } {
  return key in (obj as any);
}
