import { Maybe } from './core';

export class AssertionFailed extends Error {
  constructor(message?: string) {
    super(message ? `Assertion failed: ${message}` : 'Assertion failed.');
  }
}

export function assert(cond: boolean, message?: string): void {
  if (!cond) throw new AssertionFailed(message);
}

export function expect<T>(value: Maybe<T>, message = 'Unexpected null'): T {
  assert(value !== null, message);
  return value as T;
}
