const {binarySearchFirstOccurrence3} = require('./binary-search-first-occurrence-3');

describe('Binary search for first occurrence non recursive version', () => {

  it('[0]', () => {
    const A = [0];
    expect(binarySearchFirstOccurrence3(A, 0)).toBe(0);
    expect(binarySearchFirstOccurrence3(A, 2)).toBe(-1);
  });

  it('[2, 5]', () => {
    const A = [2, 5];
    expect(binarySearchFirstOccurrence3(A, 2)).toBe(0);
    expect(binarySearchFirstOccurrence3(A, 5)).toBe(1);
    expect(binarySearchFirstOccurrence3(A, 7)).toBe(-1);
  })

  it('[2, 5, 7]', () => {
    const A = [2, 5, 7];
    expect(binarySearchFirstOccurrence3(A, 2)).toBe(0);
    expect(binarySearchFirstOccurrence3(A, 5)).toBe(1);
    expect(binarySearchFirstOccurrence3(A, 7)).toBe(2);
    expect(binarySearchFirstOccurrence3(A, 11)).toBe(-1);
  })

  it('[2, 5, 7, 11, 13, 17, 19, 23, 29, 31]', () => {
    const A = [2, 5, 7, 11, 13, 17, 19, 23, 29];
    expect(binarySearchFirstOccurrence3(A, 2)).toBe(0);
    expect(binarySearchFirstOccurrence3(A, 5)).toBe(1);
    expect(binarySearchFirstOccurrence3(A, 7)).toBe(2);
    expect(binarySearchFirstOccurrence3(A, 11)).toBe(3);
    expect(binarySearchFirstOccurrence3(A, 13)).toBe(4);
    expect(binarySearchFirstOccurrence3(A, 17)).toBe(5);
    expect(binarySearchFirstOccurrence3(A, 19)).toBe(6);
    expect(binarySearchFirstOccurrence3(A, 23)).toBe(7);
    expect(binarySearchFirstOccurrence3(A, 29)).toBe(8);
    expect(binarySearchFirstOccurrence3(A, 31)).toBe(-1);
  })

  it('[2, 2, 5, 5, 7, 7, 7, 11, 11, 11, 13, 13, 13, 17, 17, 17, 17, 19, 19, 23, 23, 23, 23, 29, 29]', () => {
    const A = [2, 2, 5, 5, 7, 7, 7, 11, 11, 11, 13, 13, 13, 17, 17, 17, 17, 19, 19, 23, 23, 23, 23, 29, 29];
    expect(binarySearchFirstOccurrence3(A, 2)).toBe(0);
    expect(binarySearchFirstOccurrence3(A, 5)).toBe(2);
    expect(binarySearchFirstOccurrence3(A, 7)).toBe(4);
    expect(binarySearchFirstOccurrence3(A, 11)).toBe(7);
    expect(binarySearchFirstOccurrence3(A, 13)).toBe(10);
    expect(binarySearchFirstOccurrence3(A, 17)).toBe(13);
    expect(binarySearchFirstOccurrence3(A, 19)).toBe(17);
    expect(binarySearchFirstOccurrence3(A, 23)).toBe(19);
    expect(binarySearchFirstOccurrence3(A, 29)).toBe(23);
    expect(binarySearchFirstOccurrence3(A, 0)).toBe(-1);
  })
})
