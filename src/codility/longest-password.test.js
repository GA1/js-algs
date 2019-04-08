const solution = require('./longest-password').solution;

describe('longest password', () => {

  it('"a" gives -1', () => {
    const A = [0];
    expect(solution('a')).toBe(-1);
  })

  it('"test 5 a0A pass007 ?xy1" gives 7', () => {
    const A = [0];
    expect(solution('test 5 a0A pass007 ?xy1')).toBe(7);
  });

})