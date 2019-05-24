const solution = require('./max-profit').solution;

describe('max profit', () => {

  it('[23171, 21011, 21123, 21366, 21013, 21367]', () => {
    const A = [23171, 21011, 21123, 21366, 21013, 21367]
    expect(solution(A)).toEqual(356);
  })

  it('[]', () => {
    const A = []
    expect(solution(A)).toEqual(0);
  })

  it('[2, 5]', () => {
    const A = [2, 5]
    expect(solution(A)).toEqual(3);
  })

  it('[7, 3]', () => {
    const A = [7, 3]
    expect(solution(A)).toEqual(0);
  })

  it('[7, 2, 13]', () => {
    const A = [7, 2, 13]
    expect(solution(A)).toEqual(11);
  })

  it('[3, 6, 2]', () => {
    const A = [3, 6, 2]
    expect(solution(A)).toEqual(3);
  })

})
