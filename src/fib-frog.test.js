const solve = require('./fib-frog').solve;
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

  describe('solve', () => {
    it('[]', () => {
      expect(solve([])).toEqual(1);
    })

    it('[1]', () => {
      expect(solve([1])).toEqual(1);
    })

    it('[0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]', () => {
      expect(solve([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0])).toEqual(3);
    })
  })


})
