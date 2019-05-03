const {solve} = require('./absolute-distinct-count');

describe('Binary search', () => {

  it('[-5, -3, -1, 0, 3, 6]', () => {
    expect(solve([-5, -3, -1, 0, 3, 6])).toBe(5);
  });
})