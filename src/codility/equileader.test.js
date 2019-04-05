const solve = require('./equileader').solve;
const leader = require('./equileader').leader;

describe('Binary search', () => {

  it('leader of [1]', () => {
    expect(leader([1])).toBe(1);
  })

  it('leader of [1, 2, 2]', () => {
    expect(leader([1, 2, 2])).toBe(2);
  });

  it('leader of [4, 3, 4, 4, 4, 2]', () => {
    expect(leader([4, 3, 4, 4, 4, 2])).toBe(4);
  });

  it('solve of [4, 3, 4, 4, 4, 2]', () => {
    expect(solve([4, 3, 4, 4, 4, 2])).toBe(2);
  });

  it('solve of [1, 1]', () => {
    expect(solve([1, 1])).toBe(1);
  });

  it('solve of [1, 1, 2]', () => {
    expect(solve([1, 1, 2])).toBe(0);
  });

  it('solve of [1, 1, 2, 1, 1]', () => {
    expect(solve([1, 1, 2, 1, 1])).toBe(4);
  });

})