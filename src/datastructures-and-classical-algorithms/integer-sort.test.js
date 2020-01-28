const {integerSort} = require('./integer-sort');

describe('Integer sort', () => {
  it('1, 0', () => {
    expect(integerSort([1, 0])).toEqual([0, 1]);
  });

  it('1, 0, 1, 1, 0', () => {
    expect(integerSort([1, 0, 1, 1, 0])).toEqual([0, 0, 1, 1, 1]);
  });

  it('0, 4, 3, 0, 1, 3, 2', () => {
    expect(integerSort([0, 4, 3, 0, 1, 3, 2])).toEqual([0, 0, 1, 2, 3, 3, 4]);
  });

})
