const solution = require('./number-of-disc-intersections').solution;
const binarySearchOfLastOccurrence = require('./number-of-disc-intersections').binarySearchOfLastOccurrence;

describe('number of disc intersections', () => {

  it('[0], 0, 1, 0', () => {
    expect(binarySearchOfLastOccurrence([0], 0, 1, 0)).toBe(0);
  });

  it('[0, 1], 0, 2, 0', () => {
    expect(binarySearchOfLastOccurrence([0, 1], 0, 2, 0, -1)).toBe(0);
  });

  it('[0, 1], 0, 2, 1', () => {
    expect(binarySearchOfLastOccurrence([0, 1], 0, 2, 1, -1)).toBe(1);
  });

  it('[0, 1, 3], 0, 3, 2', () => {
    expect(binarySearchOfLastOccurrence([0, 1, 3], 0, 3, 2, -1)).toBe(1);
  });

  it('[-4, -1, 0, 0, 2, 5], 2, 6, 1', () => {
    expect(binarySearchOfLastOccurrence([-4, -1, 0, 0, 2, 5], 2, 6, 1,-1)).toBe(3);
  });

  it('[-4, -1, 0, 0, 2, 5], 2, 6, 1', () => {
    expect(binarySearchOfLastOccurrence([-4, -1, 0, 0, 2, 5], 5, 6, 4,-1)).toBe(-1);
  });

  it('[1, 5, 2, 1, 4, 0]', () => {
    expect(solution([1, 5, 2, 1, 4, 0])).toBe(11);
  });


})
