const solution = require('./fib-frog').solution;
const stepsLowerOrEqualThan = require('./fib-frog').stepsLowerOrEqualThan;

describe('fibFrog', () => {

  describe('stepsLoweThan', () => {
    it('1', () => {
      expect(stepsLowerOrEqualThan(1)).toEqual([1]);
    })

    it('2', () => {
      expect(stepsLowerOrEqualThan(2)).toEqual([1, 2]);
    })

    it('13', () => {
      expect(stepsLowerOrEqualThan(13)).toEqual([1, 2, 3, 5, 8, 13]);
    })
  })

  describe('solution', () => {
    it('[]', () => {
      expect(solution([])).toEqual(1);
    })

    it('[1]', () => {
      expect(solution([1])).toEqual(1);
    })

    it('[0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]', () => {
      expect(solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0])).toEqual(3);
    })
  })


})
