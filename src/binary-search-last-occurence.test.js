const solve = require('./binary-search-last-occurence').solve;

describe('Binary search for last occurence', () => {

  it('[0]', () => {
    const A = [0];
    expect(solve(A, 0)).toBe(0);
    expect(solve(A, 2)).toBe(-1);
  });

  it('[2, 5]', () => {
    const A = [2, 5];
    expect(solve(A, 2)).toBe(0);
    expect(solve(A, 5)).toBe(1);
    expect(solve(A, 7)).toBe(-1);
  })

  it('[2, 5, 7]', () => {
    const A = [2, 5, 7];
    expect(solve(A, 2)).toBe(0);
    expect(solve(A, 5)).toBe(1);
    expect(solve(A, 7)).toBe(2);
    expect(solve(A, 11)).toBe(-1);
  })

  it('[2, 5, 7, 11, 13, 17, 19, 23, 29, 31]', () => {
    const A = [2, 5, 7, 11, 13, 17, 19, 23, 29];
    expect(solve(A, 2)).toBe(0);
    expect(solve(A, 5)).toBe(1);
    expect(solve(A, 7)).toBe(2);
    expect(solve(A, 11)).toBe(3);
    expect(solve(A, 13)).toBe(4);
    expect(solve(A, 17)).toBe(5);
    expect(solve(A, 19)).toBe(6);
    expect(solve(A, 23)).toBe(7);
    expect(solve(A, 29)).toBe(8);
    expect(solve(A, 31)).toBe(-1);
  })

  it('[2, 2]', () => {
    const A = [2, 2];
    expect(solve(A, 2)).toBe(1);
  })

  it('[2, 2, 5, 5, 7, 7, 7, 11, 11, 11, 13, 13, 13, 17, 17, 17, 17, 19, 19, 23, 23, 23, 23, 29, 29]', () => {
    const A = [2, 2, 5, 5, 7, 7, 7, 11, 11, 11, 13, 13, 13, 17, 17, 17, 17, 19, 19, 23, 23, 23, 23, 29, 29];
    expect(solve(A, 2)).toBe(1);
    expect(solve(A, 5)).toBe(3);
    expect(solve(A, 7)).toBe(6);
    expect(solve(A, 11)).toBe(9);
    expect(solve(A, 13)).toBe(12);
    expect(solve(A, 17)).toBe(16);
    expect(solve(A, 19)).toBe(18);
    expect(solve(A, 23)).toBe(22);
    expect(solve(A, 29)).toBe(24);
  })
})