const {algorithm2} = require('./2-algorithm');

describe('advent of code 2019, day 2, part 2', () => {
  it('2,3,0,3,99', () => {
    expect(algorithm2('2,3,0,3,99', 0, 3)).toBe(2)
  });

  it('2,3,0,0,99', () => {
    expect(algorithm2('2,1,1,0,99', 4, 2)).toBe(198)
  });
})
