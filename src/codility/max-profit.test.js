const solve = require('./max-profit').solve;

describe('max profit', () => {

  it('[23171, 21011, 21123, 21366, 21013, 21367]', () => {
    const A = [23171, 21011, 21123, 21366, 21013, 21367]
    expect(solve(A)).toEqual(356);
  })

  it('[]', () => {
    const A = []
    expect(solve(A)).toEqual(0);
  })

  it('[2, 5]', () => {
    const A = [2, 5]
    expect(solve(A)).toEqual(3);
  })

  it('[11, 7, 3, 2, 5, 13]', () => {
    const A = [7, 2, 13]
    expect(solve(A)).toEqual(11);
  })



})