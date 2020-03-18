const lib = require('../lib.js');

test('our first test', () => {});

// input 3 output 3
test('absolute - should return a positive number if passed positive input', () => {
  const result = lib.absolute(1);

  // assertion
  expect(result).toBe(1);
});

// input -3 output 3
test('absolute - should return a positive number if passed negative input', () => {
  const result = lib.absolute(-1);

  // assertion
  expect(result).toBe(1);
});

test('absolute - should return a zero if passed zero', () => {
  const result = lib.absolute(0);

  // assertion
  expect(result).toBe(0);
});

// input 0 output 0
