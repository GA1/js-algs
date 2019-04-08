const solution = require('./flood-depth').solution;
const calculateGreatestOnRight = require('./flood-depth').calculateGreatestOnRight;

describe('flood depth', () => {
  describe('calculateGreatestOnRight helper', () => {
    it('[7, 5, 13, 1, 0] 0', () => {
      expect(calculateGreatestOnRight([7, 5, 13, 1, 0])).toEqual([13, 13, 13, 1, 0, 0])
    })
  })

  describe('solution', () => {
    it('[13] 0', () => {
      expect(solution([13])).toEqual(0)
    })


    it('[5, 8] 0', () => {
      expect(solution([5, 8])).toEqual(0)
    })

    it('[2, 1, 2] 1', () => {
      expect(solution([2, 1, 2])).toEqual(1)
    })

    it('[1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2] 2', () => {
      expect(solution([1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2])).toEqual(2)
    })
  })
})
