const solve = require('./passing-cars').solve;

describe('Passing cars', () => {

  it('[0]', () => {
    expect(solve([0])).toBe(0);
  });

  it('[0]', () => {
    expect(solve([1])).toBe(0);
  });

  it('[0, 1, 0, 1, 1]', () => {
    expect(solve([0, 1, 0, 1, 1])).toBe(5);
  });
})
