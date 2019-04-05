const solve = require('./peaks').solve;
const findPeakPositions = require('./peaks').findPeakPositions;

describe('peaks search', () => {

  it('findPeakPositions of [1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]', () => {
    const A = [1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]
    expect(findPeakPositions(A)).toEqual([3, 5, 10]);
  })

  it('findPeakPositions of [1, 2, 3]', () => {
    const A = [1, 2, 3]
    expect(findPeakPositions(A)).toEqual([]);
  })

  it('solve of [1]', () => {
    const A = [1]
    expect(solve(A)).toEqual(0);
  })

  it('solve of [3, 5, 3]', () => {
    const A = [3, 5, 3]
    expect(solve(A)).toEqual(1);
  })

  it('solve of [5, 3, 5, 3, 5]', () => {
    const A = [5, 3, 5, 3, 5]
    expect(solve(A)).toEqual(1);
  })

  it('solve of [1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]', () => {
    const A = [1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]
    expect(solve(A)).toEqual(3);
  })


})