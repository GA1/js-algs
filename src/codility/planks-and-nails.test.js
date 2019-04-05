const solve = require('./planks-and-nails').solve;

describe('Plancks and nails', () => {

  it('[0], [2], [1]', () => {
    const A = [0]
    const B = [2]
    const C = [1]
    expect(solve(A, B, C)).toBe(1);
  });

  it('[0], [2], [3]', () => {
    const A = [0]
    const B = [2]
    const C = [3]
    expect(solve(A, B, C)).toBe(-1);
  });

  it('[2], [3], [0, 2]', () => {
    const A = [2]
    const B = [3]
    const C = [0, 2]
    expect(solve(A, B, C)).toBe(2);
  })

  it('[2], [3], [0, 2]', () => {
    const A = [2]
    const B = [3]
    const C = [0, 3]
    expect(solve(A, B, C)).toBe(2);
  })

  it('[2], [3], [0, 3]', () => {
    const A = [2]
    const B = [3]
    const C = [0, 3]
    expect(solve(A, B, C)).toBe(2);
  })

  it('[2], [3], [3, 2, 1]', () => {
    const A = [2]
    const B = [3]
    const C = [3, 2, 1]
    expect(solve(A, B, C)).toBe(1);
  })

  it('[0, 3], [2, 5], [0, 1, 2, 3, 5]', () => {
    const A = [0, 3]
    const B = [2, 5]
    const C = [0, 1, 2, 3, 5]
    expect(solve(A, B, C)).toBe(4);
  })

  it('[0, 0, 0], [2, 2, 2], [0, 1, 2]', () => {
    const A = [0, 0, 0]
    const B = [2, 2, 2]
    const C = [0, 1, 2]
    expect(solve(A, B, C)).toBe(1);
  })

  it('[1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]', () => {
    const A = [1, 4, 5, 8]
    const B = [4, 5, 9, 10]
    const C = [4, 6, 7, 10, 2]
    expect(solve(A, B, C)).toBe(4);
  })

})