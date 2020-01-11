const {solution, binarySearchFirstOccurrence} = require('./rectangle-builder-greater-area');

describe('rectangle builder greater area', () => {
  describe('binarySearchFirstOccurrence', () => {
    it('[], 0, 2, 100', () => {
      expect(binarySearchFirstOccurrence([], 0, 2, 100)).toBe(-1);
    })

    it('[7, 5, 3, 2], 1, 4, 15', () => {
      expect(binarySearchFirstOccurrence([7, 5, 3, 2], 1, 4, 15)).toBe(1);
    });

    it('[7, 5, 3, 2], 2, 4, 15', () => {
      expect(binarySearchFirstOccurrence([7, 5, 3, 2], 2, 4, 15)).toBe(-1);
    })

    it('[7, 5, 3, 2], 0, 4, 15', () => {
      expect(binarySearchFirstOccurrence([7, 5, 3, 2], 0, 4, 15)).toBe(1);
    })

    it('[7, 5, 3, 2], 0, 4, 150', () => {
      expect(binarySearchFirstOccurrence([7, 5, 3, 2], 0, 4, 150)).toBe(-1);
    })

    it('[73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2], 0, 2, 100', () => {
      expect(binarySearchFirstOccurrence([73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2], 0, 2, 100)).toBe(5);
    })
  })

  describe('solution', () => {
    it('[2, 3, 2, 3], 5', () => {
      expect(solution([2, 2, 3, 3], 5)).toBe(1);
    });

    it('[2, 2, 2, 2], 3', () => {
      expect(solution([2, 2, 2, 2], 3)).toBe(1);
    });

    it('[2, 2, 3, 3, 2, 2], 3', () => {
      expect(solution([2, 2, 3, 3, 2, 2], 3)).toBe(2);
    });

    it('[4, 3, 3, 2, 1, 1, 2, 3, 4], 6', () => {
      expect(solution([4, 3, 3, 2, 1, 1, 2, 3, 4], 6)).toBe(3);
    })

    it('[1, 2, 5, 1, 1, 2, 3, 5, 1], 5', () => {
      expect(solution([1, 2, 5, 1, 1, 2, 3, 5, 1], 5)).toBe(2);
    });

    it('[1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12], 3', () => {
      expect(solution([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12], 10)).toBe(56);
    })
  })
})
