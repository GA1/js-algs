const solve = require('./prime-factors').solve;

describe('Prime factors', () => {

  it('Prime factors of 12', () => {
    expect(solve(12)).toEqual([1, 2, 3, 4, 6, 12]);
  });

  it('Prime factors of 2', () => {
    expect(solve(2)).toEqual([1, 2]);
  });

  it('Prime factors of 16', () => {
    expect(solve(16)).toEqual([1, 2, 4, 8, 16]);
  });


})