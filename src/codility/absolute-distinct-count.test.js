const {solve} = require('./absolute-distinct-count');

describe('Binary search', () => {

  it('[-5, -3, -1, 0, 3, 6]', () => {
    expect(solve([-5, -3, -1, 0, 3, 6])).toBe(5);
  });

  it('[-5, -3, -1, 0, 3]', () => {
    expect(solve([-3, -1, 0, 3])).toBe(3);
  });

  it('[-1, 1]]', () => {
    expect(solve([-1, 1])).toBe(1);
  })

  it('[1, 2]]', () => {
    expect(solve([1, 2])).toBe(2);
  })

  it('[0]', () => {
    expect(solve([0])).toBe(1);
  });
})