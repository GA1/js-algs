const modifiedFibonacci = require('./modified-fibonacci');

describe('modifiedFibonacci', () => {

  it('2, 5, 1 returns 2', () => {
    expect(modifiedFibonacci.solve(2, 5, 1)).toBe('2');
  });

  it('2, 5, 2 returns 5', () => {
    expect(modifiedFibonacci.solve(2, 5, 2)).toBe('5');
  });

  it('2, 5, 3 returns 27', () => {
    expect(modifiedFibonacci.solve(2, 5, 3)).toBe('27');
  });

  it('0, 1, 10 returns 84266613096281243382112', () => {
    expect(modifiedFibonacci.solve(0, 1, 10)).toBe('84266613096281243382112');
  });

})
