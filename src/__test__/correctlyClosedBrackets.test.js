const areCorrect = require('../correctlyClosedBrackets').areCorrect

describe('correctlyClosedBrackets', () => {

  it('{, [, ( are incorrect', () => {
    expect(areCorrect('{')).toBe(0);
    expect(areCorrect('[')).toBe(0);
    expect(areCorrect('(')).toBe(0);
  });

  it('}, ], ) are incorrect', () => {
    expect(areCorrect('}')).toBe(0);
    expect(areCorrect(']')).toBe(0);
    expect(areCorrect(')')).toBe(0);
  });

  it('}{ ][ )( are incorrect', () => {
    expect(areCorrect('}{')).toBe(0);
    expect(areCorrect('][')).toBe(0);
    expect(areCorrect(')(')).toBe(0);
  })

  it('{}, [], () are incorrect', () => {
    expect(areCorrect('{}')).toBe(1);
    expect(areCorrect('[]')).toBe(1);
    expect(areCorrect('()')).toBe(1);
  });

  it('{}[]() is correct', () => {
    expect(areCorrect('{}[]()')).toBe(1);
  });

  it('{([])} is correct', () => {
    expect(areCorrect('{([])}')).toBe(1);
  });

  it('{[]()} is correct', () => {
    expect(areCorrect('{[]()}')).toBe(1);
  });

  it('{[]()}{[]()} is correct', () => {
    expect(areCorrect('{[]()}')).toBe(1);
  });

})
