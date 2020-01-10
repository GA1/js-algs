const {solution} = require('./string-symmetry-point');

describe('string symmetry point', () => {

  it('', () => {
    expect(solution('')).toBe(-1);
  });

  it('a', () => {
    expect(solution('a')).toBe(0);
  });

  it('ab', () => {
    expect(solution('ab')).toBe(-1);
  });

  it('aa', () => {
    expect(solution('aa')).toBe(-1);
  });

  it('abdca', () => {
    expect(solution('abdca')).toBe(-1);
  });

  it('racecar', () => {
    expect(solution('racecar')).toBe(3);
  });
})
