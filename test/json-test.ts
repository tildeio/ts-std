import * as std from 'ts-std';

QUnit.module('JSON');

QUnit.test('the types make sense', assert => {
  function roundTrip(obj: std.JSON, message: string): void {
    assert.deepEqual(JSON.parse(JSON.stringify(obj)), obj, message);
  }

  roundTrip('hello', 'string');
  roundTrip(100, 'number');
  roundTrip(100.234, 'float');
  roundTrip(true, 'true');
  roundTrip(false, 'false');
  roundTrip(null, 'null');
  roundTrip({}, 'object');
  roundTrip([], 'array');
  roundTrip({
    a: {
      b: {
        c: 'hello', d: 100, e: true, f: null
      },
      g: ['hello', 100, true, null]
    }
  }, 'nested object');

  // these shouldn't type check
  // roundTrip(undefined, 'undefined');
  // roundTrip(new Date(), 'date');
});
