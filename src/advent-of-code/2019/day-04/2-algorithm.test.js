const {hasAtLeastOneGroupOfExactlyTwoSameDigits} = require('./2-algorithm');

describe('advent of code 2019, day 4, part 2', () => {
  describe('hasAtLeastOneGroupOfExactlyTwoSameDigits', () => {
    it('112345', () => {
      expect(hasAtLeastOneGroupOfExactlyTwoSameDigits([1, 1, 2, 3, 4, 5])).toEqual(true)
    });

    it('111222', () => {
      expect(hasAtLeastOneGroupOfExactlyTwoSameDigits([1, 1, 1, 2, 2, 2])).toEqual(false)
    });

    it('222244', () => {
      expect(hasAtLeastOneGroupOfExactlyTwoSameDigits([2, 2, 2, 2, 4, 4])).toEqual(true)
    });
  })
})
