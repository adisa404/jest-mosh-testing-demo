const lib = require('../lib.js');
const db = require('../db.js');
const mail = require('../mail.js');

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

  // test if a string is similar
  it('should return an almost exact greeting message', () => {
    const message = lib.greet('Adisa');

    expect(message).toContain('Adisa');
    expect(message).toMatch(/Adisa/);
  });
});

// when testing arrays don't test for index
describe('getCurrencies', () => {
  it('should return supported currencies', () => {
    let result = lib.getCurrencies();

    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });

  it('should return supported currencies - with arrayContaining', () => {
    let result = lib.getCurrencies();

    expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR'])); // order doesn't matter
  });
});

describe('getProduct', () => {
  it('should return the same object', () => {
    const product = lib.getProduct(1);

    //expect(product).toEqual({ id: 1, price: 10 });

    expect(product).toMatchObject({ id: 1 }); // will pass since it doesn't chek all props
    expect(product).toHaveProperty('id', 1);
  });
});

describe('registerUser', () => {
  it('should throw if username is falsy', () => {
    //You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail
    expect(() => lib.registerUser('')).toThrow(
      new Error('Username is required.')
    );
  });

  it('should return object if username is truthy', () => {
    const result = lib.registerUser('adisa');
    expect(result).toMatchObject({
      username: 'adisa'
    });
  });
});

describe('applyDiscount', () => {
  it('should apply a 10% discount to the price', () => {
    db.getCustomerSync = function(customerId) {
      return { id: customerId, points: 11 };
    };

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe('notifyCustomer', () => {
  it('should send an email to the customer', () => {
    db.getCustomerSync = function(customerId) {
      return { email: 'a' };
    };

    let isSent = false;
    mail.send = function(to, subject) {
      isSent = true;
    };

    lib.notifyCustomer({ customerId: 1 });
    expect(isSent).toBe(true);
  });
});
