const { solution } = require('./min-abs-sum')

describe('minAbsSum solver', () => {

  it('[]', () => {
    const A = []
    expect(solution(A)).toEqual(0);
  })

  it('[1]', () => {
    const A = [1];
    expect(solution(A)).toEqual(1);
  })

  it('[-2]', () => {
    const A = [-2];
    expect(solution(A)).toEqual(2);
  })

  it('[1, 1]', () => {
    const A = [1, 1];
    expect(solution(A)).toEqual(0);
  })

  it('[2, 5, 3]', () => {
    const A = [2, 5, 3];
    expect(solution(A)).toEqual(0);
  })


})
