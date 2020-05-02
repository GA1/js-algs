const { solveSingleCase } = require('./3-solver-oversized-pancake-choppers')

describe('2020', () => {
  describe('3rd task: Oversized Pancake Choppers', () => {
    it('1, 3, [1]', () => {
      expect(solveSingleCase(1, 3, [1])).toEqual(2)
    })
    it('5, 2, [10, 5, 359999999999, 123456789, 10]', () => {
      expect(solveSingleCase(5, 2, [10, 5, 359999999999, 123456789, 10])).toEqual(0)
    })
    it('2, 3, [8, 4]', () => {
      expect(solveSingleCase(2, 3, [8, 4])).toEqual(1)
    })
    it('3, 2', () => {
      expect(solveSingleCase(3, 2, [1, 2, 3])).toEqual(1)
    })
  })
})
