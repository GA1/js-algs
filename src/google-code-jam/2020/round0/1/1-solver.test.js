const solveSingleCase = require('./1-solver').solveSingleCase

describe('2020', () => {
  describe('1st task Vestigium', () => {
    it('[[1, 2, 3, 4], [2, 1, 4,  3], [3, 4, 1, 2], [4, 3, 2, 1]]', () => {
      expect(
        solveSingleCase([
          [1, 2, 3, 4],
          [2, 1, 4, 3],
          [3, 4, 1, 2],
          [4, 3, 2, 1],
        ])
      ).toEqual([4, 0, 0])
    })

    it('[[2, 2, 2, 2], [2, 3, 2, 3], [2, 2, 2, 3], [2, 2, 2, 2]]', () => {
      expect(
        solveSingleCase([
          [2, 2, 2, 2],
          [2, 3, 2, 3],
          [2, 2, 2, 3],
          [2, 2, 2, 2],
        ])
      ).toEqual([9, 4, 4])
    })

    it('[[1, 2], [0, 2]]', () => {
      expect(
        solveSingleCase([
          [1, 2],
          [0, 2],
        ])
      ).toEqual([3, 0, 1])
    })

    it('[[2, 1, 3], [1, 3, 2], [1, 2, 3]]', () => {
      expect(
        solveSingleCase([
          [2, 1, 3],
          [1, 3, 2],
          [1, 2, 3],
        ])
      ).toEqual([8, 0, 2])
    })
  })
})
