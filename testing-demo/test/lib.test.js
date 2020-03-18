const lib = require('../lib.js');

test('our first test', () => {});

describe('absolute', () => {
  // input 3 output 3
  it('should return a positive number if passed positive input', () => {
    const result = lib.absolute(1);

    // assertion
    expect(result).toBe(1);
  });

  // input -3 output 3
  it('should return a positive number if passed negative input', () => {
    const result = lib.absolute(-1);

    // assertion
    expect(result).toBe(1);
  });

  // input 0 output 0
  it('should return a zero if passed zero', () => {
    const result = lib.absolute(0);

    // assertion
    expect(result).toBe(0);
  });
});

describe('greet', () => {
  it('should return a greeting message', () => {
    const message = lib.greet('Adisa');

    expect(message).toBe('Welcome Adisa');
  });

  it('should return an almost exact greeting message', () => {
    const message = lib.greet('Adisa');

    expect(message).toContain('Adisa');
    expect(message).toMatch(/Adisa/);
  });
});

// test if a string is similar
