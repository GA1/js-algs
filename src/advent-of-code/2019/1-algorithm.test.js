const {algorithm} = require('./1-algorithm');

describe('advent of code 2019, day 1', () => {

  it('12', () => {
    expect(algorithm(12)).toBe(2);
  });

  it('14', () => {
    expect(algorithm(14)).toBe(2);
  });

  it('1969', () => {
    expect(algorithm(1969)).toBe(654);
  })

  it('100756', () => {
    expect(algorithm(100756)).toBe(33583);
  });

  it('119962', () => {
    expect(algorithm(119962)).toBe(39985);
  });

})
