import * as std from 'ts-std';

QUnit.module('Assertions');

QUnit.test('it throws an AssertionFailed error', assert => {
  std.assert(true);

  assert.throws(() => std.assert(false), std.AssertionFailed, 'Assertion failed.');
});

QUnit.test('custom messages', assert => {
  std.assert(true, 'It does not throw');

  assert.throws(() => std.assert(false, 'It throws'), std.AssertionFailed, 'Assertion failed: It throws');
});
