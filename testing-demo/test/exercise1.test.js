const ex1 = require('../exercise1.js');

describe('fizzBuzz', () => {
  it('should throw an error if input is not a number', () => {
    expect(() => {
      ex1.fizzBuzz(null);
    }).toThrow(new Error('Input should be a number.'));
  });

  it('should return FizzBuzz if input is divisible by 3 and 5', () => {
    const result = ex1.fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });

  it('should return Fizz if input is divisible by 3', () => {
    const result = ex1.fizzBuzz(6);
    expect(result).toBe('Fizz');
  });

  it('should return Buzz if input is divisible by 5', () => {
    const result = ex1.fizzBuzz(10);
    expect(result).toBe('Buzz');
  });

  it('should return input if input is not divisible by 3 or 5', () => {
    const result = ex1.fizzBuzz(8);
    expect(result).toBe(8);
  });
});
