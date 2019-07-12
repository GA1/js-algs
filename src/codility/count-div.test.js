const {solution} = require('./count-div')

describe('count div', () => {

  it('7, 19, 2', () => {
    expect(solution(7, 19, 2)).toBe(6);
  })

  it('6, 11, 2', () => {
    expect(solution(6, 11, 2)).toBe(3);
  })

})
