import { unknown } from './core';

export function isReadonlyArray<T>(value: unknown): value is ReadonlyArray<T> {
  return Array.isArray(value);
}
