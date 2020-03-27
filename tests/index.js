const test = require('tape');
const pad = require('../')

test('padLeft all params', function (t) {
  const result = pad.padLeft('500', 6, '0', true)
  const expected = '000500'

  t.ok(result)
  t.deepEqual(result, expected)
  
  t.end()
});

test('padLeft multi char', function (t) {
  const result = pad.padLeft('TEST', 10, 'X0')
  const expected = 'X0X0X0TEST'

  t.ok(result)
  t.deepEqual(result, expected)
  
  t.end()
});


test('padRight char test', function (t) {
  const result = pad.padRight('TEST', 10, 'X0')
  const expected = 'TESTX0X0X0'

  t.ok(result)
  t.deepEqual(result, expected)
  
  t.end()
});

test('padRight trunc test', function (t) {
  const result = pad.padRight('TESTING', 4, 'X0', true)
  const expected = 'TEST'

  t.ok(result)
  t.deepEqual(result, expected)
  
  t.end()
});
