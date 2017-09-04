import * as std from 'ts-std';

QUnit.module('Arrays');

QUnit.test('isArray()', assert => {
  class MyArray extends Array {}

  function args() {
    return arguments;
  }

  assert.strictEqual(std.isReadonlyArray([]), true, 'isArray([])');
  assert.strictEqual(std.isReadonlyArray('string'), false, 'isArray("string")');
  assert.strictEqual(std.isReadonlyArray(new MyArray()), true, 'isArray(class extends Array {})');
  assert.strictEqual(std.isReadonlyArray(args()), false, 'isArray(arguments)');
});
