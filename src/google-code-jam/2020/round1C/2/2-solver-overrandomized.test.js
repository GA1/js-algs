const { solveSingleCase } = require('./2-solver-overrandomized')

describe('2020 1B', () => {
  describe('Join the ranks', () => {
    it('2, 2', () => {
      expect(solveSingleCase(2, 2)).toEqual([[2, 1]])
    })
    it('3, 2', () => {
      expect(solveSingleCase(3, 2)).toEqual([[3, 2], [2, 1]])
    })
    it('2, 3', () => {
      expect(solveSingleCase(2, 3)).toEqual([[4, 1], [3, 1]])
    })
    it('3, 3', () => {
      expect(solveSingleCase(3, 3)).toEqual([[6, 2], [5, 2], [4, 1], [3, 1]])
    })

    it('2, 4', () => {
      expect(solveSingleCase(2, 4)).toEqual([[6, 1], [5, 1], [4, 1]])
    })

    it('4, 3', () => {
      expect(solveSingleCase(4, 3)).toEqual([[8, 3], [7, 3], [6, 2], [5, 2], [4, 1], [3, 1]])
    })

    it('3, 4', () => {
      expect(solveSingleCase(3, 4)).toEqual([[9, 2], [8, 2], [7, 2], [6, 1], [5, 1], [4, 1]])
    })

    it('4, 4', () => {
      expect(solveSingleCase(4, 4)).toEqual([[12, 3], [11, 3], [10, 3], [9, 2], [8, 2], [7, 2], [6, 1], [5, 1], [4, 1]])
    })
  })
})
