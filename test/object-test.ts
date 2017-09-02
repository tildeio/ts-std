import * as std from 'ts-std';

QUnit.module('Objects');

QUnit.test('keys()', assert => {
  let obj = { a: 1, b: 'b', c: true };
  let keys = std.keys(obj);

  assert.deepEqual(keys, ['a', 'b', 'c'], 'produces the correct keys');
});

QUnit.test('values()', assert => {
  let obj = { a: 1, b: 'b', c: true };
  let values = std.values(obj);

  assert.deepEqual(values, [1, 'b', true], 'produces the correct values');
});

QUnit.test('entries()', assert => {
  let obj = { a: 1, b: 'b', c: true };
  let entries = [...std.entries(obj)];

  assert.deepEqual(entries, [['a', 1], ['b', 'b'], ['c', true]], 'produces the correct entries');
});

QUnit.test('hasProperty() is true on enumerable own properties', assert => {
  let obj = { a: 1, b: 'b', c: true };

  assert.strictEqual(std.hasProperty(obj, 'a'), true, `the object has 'a'`);
  assert.strictEqual(std.hasProperty(obj, 'b'), true, `the object has 'b'`);
  assert.strictEqual(std.hasProperty(obj, 'c'), true, `the object has 'c'`);

  assert.strictEqual(std.hasProperty(obj, 'd'), false, `the object doesn't have has 'd'`);
});

QUnit.test('hasProperty() is true on non-enumerable inherited properties', assert => {
  let obj = {};

  assert.strictEqual(std.hasProperty(obj, 'constructor'), true, `the object has 'constructor'`);
  assert.strictEqual(std.hasProperty(obj, 'hasOwnProperty'), true, `the object has 'hasOwnProperty'`);
});

QUnit.test('hasProperty() is false on non-enumerable own properties', assert => {
  let obj = {};

  Object.defineProperty(obj, 'nonEnumerable', {
    value: 'a',
    enumerable: false,
    writable: true,
    configurable: true
  });

  assert.strictEqual(std.hasProperty(obj, 'nonEnumerable'), true, 'the object hasProperty of true on non-enumerable own properties');
});
