const merger = require('./merge');

describe('merger solver', () => {

  it('merge [] and []', () => {
    const A = [];
    const B = [];
    const expected = [];
    expect(merger.mergeRecursive(A, B )).toEqual(expected);
    expect(merger.merge(A, B )).toEqual(expected);
  })

  it('merge [] and [2]', () => {
    const A = [];
    const B = [2];
    const expected = B;
    expect(merger.mergeRecursive(A, B )).toEqual(expected);
    expect(merger.merge(A, B )).toEqual(expected);
  })

  it('merge [2] and []', () => {
    const A = [2];
    const B = [];
    const expected = [2];
    expect(merger.mergeRecursive(A, B )).toEqual(expected);
    expect(merger.merge(A, B )).toEqual(expected);
  })

  it('merge [3] and [5]', () => {
    const A = [3];
    const B = [5];
    const expected = [3, 5];
    expect(merger.mergeRecursive(A, B )).toEqual(expected);
    expect(merger.merge(A, B )).toEqual(expected);
  })

  it('merge [5] and [3]', () => {
    const A = [5];
    const B = [3];
    const expected = [3, 5];
    expect(merger.mergeRecursive(A, B )).toEqual(expected);
    expect(merger.merge(A, B )).toEqual(expected);
  })

  it('merge [2, 7, 11, 21] and [1, 2, 3, 4, 5]', () => {
    const A = [2, 7, 11, 21];
    const B = [1, 2, 3, 4, 5];
    const expected = [1, 2, 2, 3, 4, 5, 7, 11, 21];
    expect(merger.mergeRecursive(A, B )).toEqual(expected);
    expect(merger.merge(A, B )).toEqual(expected);
  })

})
