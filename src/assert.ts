import { Maybe } from './core';

export class AssertionFailed extends Error {
  constructor(message?: string) {
    super(message ? `Assertion failed: ${message}` : 'Assertion failed.');
  }
}

export function assert(cond: boolean, message?: string): void {
  if (!cond) throw new AssertionFailed(message);
}

export function expect<T>(value: Maybe<T>, message = 'Unexpected null or undefined'): T {
  assert(value !== null && value !== undefined, message);
  return value as T;
}
