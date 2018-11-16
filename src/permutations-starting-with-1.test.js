const permutationsStartingWith1 = require('./permutations-starting-with-1');

describe('pertmutationsStartingWith1', () => {

  it('should return 1 for [1]', () => {
    expect(permutationsStartingWith1.solve([1])).toBe(1);
  });

  it('should return 1 for [1, 2]', () => {
    expect(permutationsStartingWith1.solve([1, 2])).toBe(1);
  });

  it('should return 1 for [2, 1]', () => {
    expect(permutationsStartingWith1.solve([2, 1])).toBe(1);
  });

  it('should return 0 for [2]', () => {
    expect(permutationsStartingWith1.solve([2])).toBe(0);
  });

  it('should return 0 for [2, 3]', () => {
    expect(permutationsStartingWith1.solve([2, 3])).toBe(0);
  });

})
