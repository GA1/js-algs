const {solution} = require('./rectangle-builder-greater-area');

describe('rectangle builder greater area', () => {

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

  it('[1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12], 3', () => {
    expect(solution([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12], 10)).toBe(56);
  })

  it('[1, 2, 5, 1, 1, 2, 3, 5, 1], 5', () => {
    expect(solution([1, 2, 5, 1, 1, 2, 3, 5, 1], 5)).toBe(2);
  });
})
