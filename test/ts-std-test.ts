import hello from 'ts-std';

QUnit.module('ts-std tests');

QUnit.test('hello', assert => {
  assert.equal(hello(), 'Hello from ts-std');
});
