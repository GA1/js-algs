const {algorithm} = require('./2-algorithm');

describe('advent of code 2019, day 2, part 2', () => {

  it('12', () => {
    expect(algorithm(12)).toBe(2);
  });

  it('14', () => {
    expect(algorithm(14)).toBe(2);
  });

  it('1969', () => {
    expect(algorithm(1969)).toBe(966);
  })

  it('100756', () => {
    expect(algorithm(100756)).toBe(50346);
  });

})
