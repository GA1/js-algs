const solve = require('./genomic-range-query').solve;

describe('genomic range querya', () => {

  it('S = CAGCCTA, P = [2, 5, 0], Q = [4, 5, 6]', () => {
    expect(solve('CAGCCTA', [2, 5, 0], [4, 5, 6])).toEqual([2, 4, 1]);
  })

  it('S = A, P = [0], Q = [0]', () => {
    expect(solve('A', [0], [0])).toEqual([1]);
  })

  it('S = AC, P = [0, 1, 0], Q = [1, 2, 2]', () => {
    expect(solve('AC', [0, 1, 0], [0, 1, 1])).toEqual([1, 2, 1]);
  })

})
