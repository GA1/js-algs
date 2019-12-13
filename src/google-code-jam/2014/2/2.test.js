const solveSimpleCase = require('./2-single-case-solver').solveSingleCase

describe('Binary search', () => {

  it('500, 3, 1000', () => {
    expect(solveSimpleCase(500, 3, 1000)).toBe(450);
  });

  it('30, 1, 2', () => {
    expect(solveSimpleCase(30, 1, 2)).toBe(1);
  });

  it('30, 2, 100', () => {
    expect(solveSimpleCase(30, 2, 100)).toBe(39.1666667);
  });

  it('30.5, 3.14159, 1999.19990', () => {
    expect(solveSimpleCase(30.5, 3.14159, 1999.19990)).toBe(63.9680013);
  });

  it('500.0, 4.0, 2000.0', () => {
    expect(solveSimpleCase(500.0, 4.0, 2000.0)).toBe(526.1904762);
  });

})