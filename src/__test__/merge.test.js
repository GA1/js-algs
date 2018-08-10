var merger = require('../merge');

describe('merger solver', () => {

  it('merge [0] and []', () => {
    expect(merger.merge([], [] )).toEqual([]);
  })

  it('merge [] and [2]', () => {
    expect(merger.merge([], [2] )).toEqual([2]);
  })

  it('merge [2] and []', () => {
    expect(merger.merge([2], [] )).toEqual([2]);
  })

  it('merge [3] and [5]', () => {
    expect(merger.merge([3], [5] )).toEqual([3, 5]);
  })

  it('merge [5] and [3]', () => {
    expect(merger.merge([5], [3] )).toEqual([3, 5]);
  })

  it('merge [2, 7, 11, 21] and [1, 2, 3, 4, 5]', () => {
    expect(merger.merge([2, 7, 11, 21], [1, 2, 3, 4, 5] )).toEqual([1, 2, 2, 3, 4, 5, 7, 11, 21]);
  })

})
