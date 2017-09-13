import { Dict, Indexable, unknown } from './core';

export function dict<T = unknown>(): Dict<T> {
  return Object.create(null);
}

const { hasOwnProperty } = Object.prototype;

export function has(d: Dict, key: string): boolean {
  return hasOwnProperty.call(d, key);
}

export function isIndexable(v: unknown): v is Indexable {
  return v !== null && (typeof v === 'object' || typeof v === 'function');
}
