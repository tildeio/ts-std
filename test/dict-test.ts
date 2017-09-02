import * as std from 'ts-std';

QUnit.module('Dictionary');

QUnit.test('it is an empty object', assert => {
  let obj: object = std.dict();

  assert.strictEqual(Object.keys(obj).length, 0);
  assert.strictEqual(Object.getPrototypeOf(obj), null, 'dict() has no prototype');
  assert.strictEqual(obj.constructor, undefined, 'dict() has no constructor');
});

QUnit.test('setting and getting an object', assert => {
  let dict = std.dict<number>();

  assert.strictEqual(dict['hello'], undefined, 'keys in dicts are undefined before setting');
  assert.strictEqual('hello' in dict, false, 'keys in dicts are not `in` before setting');
  assert.strictEqual(std.has(dict, 'hello'), false, 'keys in dicts are not `std.has` before setting');

  dict['hello'] = 1;

  assert.strictEqual(dict['hello'], 1, 'keys in dicts are present after setting');
  assert.strictEqual('hello' in dict, true, 'keys in dicts are `in` after setting');
  assert.strictEqual(std.has(dict, 'hello'), true, 'keys in dicts are `std.has` after setting');

  dict['hello'] = undefined;

  assert.strictEqual(dict['hello'], undefined, 'keys in dicts are undefined after setting back to undefined');
  assert.strictEqual('hello' in dict, true, 'keys in dicts are `in` if present and undefined');
  assert.strictEqual(std.has(dict, 'hello'), true, 'keys in dicts are `std.has` if present and undefined');
});
