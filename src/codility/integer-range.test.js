const IntegerRange = require('./integer-range').IntegerRange;

describe('IntegerRange', () => {

  it('size of empty range', () => {
    const r = new IntegerRange(0, 0)
    expect(r.size()).toBe(0);
  });

  it('size of range with 1 element', () => {
    const r = new IntegerRange(0, 1)
    expect(r.size()).toBe(1);
  })

  it('size of empty range', () => {
    const r = new IntegerRange(0, 0)
    expect(r.isEmpty()).toBe(true);
  });

  it('size of range with 1 element', () => {
    const r = new IntegerRange(2, 3)
    expect(r.isEmpty()).toBe(false);
  })

  it('[0, 0) and [7, 7) are equal, as they are both empty', () => {
    const r1 = new IntegerRange(0, 0)
    const r2 = new IntegerRange(7, 7)
    expect(r1.areEqual(r2)).toBe(true);
  })

  it('[5, 13) and [5, 13) are equal', () => {
    const r1 = new IntegerRange(5, 13)
    const r2 = new IntegerRange(5, 13)
    expect(r1.areEqual(r2)).toBe(true);
  })

  it('are equal for [6, 13) and [5, 13)', () => {
    const r1 = new IntegerRange(6, 13)
    const r2 = new IntegerRange(5, 13)
    expect(r1.areEqual(r2)).toBe(false);
  })

  it('are equal for [5, 13) and [5, 17)', () => {
    const r1 = new IntegerRange(5, 13)
    const r2 = new IntegerRange(5, 17)
    expect(r1.areEqual(r2)).toBe(false);
  })

  it('intersection of [0, 1) and [-1, 2)', () => {
    const r1 = new IntegerRange(0, 1)
    const r2 = new IntegerRange(-1, 2)
    const result = r1.intersection(r2)
    const expected = new IntegerRange(0, 1)
    expect(result.areEqual(expected)).toBe(true);
  })

  it('intersection of [3, 5) and [1, 7)', () => {
    const r1 = new IntegerRange(3, 5)
    const r2 = new IntegerRange(1, 7)
    const result = r1.intersection(r2)
    const expected = new IntegerRange(3, 5)
    expect(result.areEqual(expected)).toBe(true);
  })

})
