const { isAtMostOneCharDifference } = require('./one-char-difference');

describe('isAtMostOneCharDifference', () => {
  it("pale, pie", () => {
    expect(isAtMostOneCharDifference('pale', 'pie')).toEqual(false)
  })

  it("abc, bcd", () => {
    expect(isAtMostOneCharDifference('abc', 'bcd')).toEqual(false)
  })

  it("pales, pale", () => {
    expect(isAtMostOneCharDifference('pales', 'pale')).toEqual(true)
  })

  it("pale, bale", () => {
    expect(isAtMostOneCharDifference('pale', 'bale')).toEqual(true)
  })

  it("pale, bake", () => {
    expect(isAtMostOneCharDifference('pale', 'bak')).toEqual(false)
  })
})
