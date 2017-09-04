import * as std from 'ts-std';

QUnit.module('Assertions: assert()');

QUnit.test('it throws an AssertionFailed error', assert => {
  std.assert(true);

  assert.throws(() => std.assert(false), std.AssertionFailed, 'Assertion failed.');
});

QUnit.test('custom messages', assert => {
  std.assert(true, 'It does not throw');

  assert.throws(() => std.assert(false, 'It throws'), std.AssertionFailed, 'Assertion failed: It throws');
});

QUnit.module('Assertions: expect()');

QUnit.test('it throws an AssertionFailed error', assert => {
  std.expect(true);
  std.expect(false);
  std.expect(0);
  std.expect('');
  std.expect(NaN);

  assert.throws(() => std.expect(null), std.AssertionFailed, 'Unexpected null or undefined.');
  assert.throws(() => std.expect(undefined), std.AssertionFailed, 'Unexpected null or undefined.');
});

QUnit.test('custom messages', assert => {
  assert.throws(() => std.expect(null, 'null, y u'), std.AssertionFailed, 'null, y u');
  assert.throws(() => std.expect(undefined, 'null, y u'), std.AssertionFailed, 'null, y u');
});
