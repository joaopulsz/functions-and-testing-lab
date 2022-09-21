const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('can add two large positive numbers', () => { 
    expect(sum(1000000, 4000000)).toBe(5000000);
  });

  test('can add two negative numbers', () => {
    expect(sum(-2, -5)).toBe(-7);
  });

  test('can add zero', () => {
    expect(sum(1, 0)).toBe(1);
  });

});

describe('subtract', () => {

  test('can subtract positive numbers', () => {
    expect(subtract(7, 5)).toBe(2);
  });

  test('can subtract negative numbers', () => {
    expect(subtract(-2, -5)).toBe(3);
  });

});

describe('multiply', () => {

  test('can multiply positive numbers', () => {
    expect(multiply(3, 5)).toBe(15);
  });

  test('can multiply negative numbers', () => {
    expect(multiply(-2, -20)).toBe(40);
  });

});

describe('divide', () => {

  test('can divide positive numbers', () => {
    expect(divide(25, 5)).toBe(5);
  });

  test('can divide negative numbers', () => {
    expect(divide(-80, -10)).toBe(8);
  });

});

describe('modulus', () => {

  test('can find remainder of positive numbers', () => {
    expect(modulus(10, 3)).toBe(1);
  });

  test('can find remainder negative numbers', () => {
    expect(modulus(-10, -3)).toBe(-1);
  });

});

describe('even', () => {

  test('can check if positive number is even', () => {
    expect(even(68)).toBe(true);
  });

  test('can check if negative number is even', () => {
    expect(even(-1059)).toBe(false);
  });

});

describe('odd', () => {

  test('can check if positive number is odd', () => {
    expect(odd(87)).toBe(true);
  });

  test('can check if negative number is odd', () => {
    expect(odd(-992)).toBe(false);
  });

});
