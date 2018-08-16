import * as std from 'ts-std';

interface ObjType {
  a: number;
  b: string;
  c: number[];
  d: string[];
}

// const obj: ObjType = {
//   a: 1,
//   b: '2',
//   c: [3],
//   d: ['4']
// }

QUnit.module('ExtractPropNamesOfType');

QUnit.test('it extract property names into a string literal type', assert => {
  let propNames: std.ExtractPropertyNamesOfType<ObjType, any[]>;
  propNames = 'c';
  propNames = 'd';
  // propNames = '';   // 🚫 Should fail
  // propNames = 'a';  // 🚫 Should fail
  // propNames = 'b';  // 🚫 Should fail
  let myString: string = propNames; // propNames extends string
  assert.ok(myString);
});

QUnit.test('intersection types work properly', assert => {
  let propNames: std.ExtractPropertyNamesOfType<ObjType, string | (string[])>;
  propNames = 'b';
  propNames = 'd';
  // propNames = 'c';  // 🚫 Should fail
  // propNames = 'a';  // 🚫 Should fail
  // propNames = '';   // 🚫 Should fail
  assert.ok(propNames);
});
