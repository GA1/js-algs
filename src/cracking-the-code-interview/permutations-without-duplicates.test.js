const {
  permutationsWithoutDuplicates,
} = require('./permutations-without-duplicates')

describe('permutationsWithoutDuplicates', () => {
  it('a', () => {
    const result = permutationsWithoutDuplicates('a')
    expect(result.has('a')).toEqual(true)
    expect(result.size).toEqual(1)
  })

  it('ab', () => {
    const result = permutationsWithoutDuplicates('ab')
    expect(result.has('ab')).toEqual(true)
    expect(result.has('ba')).toEqual(true)
    expect(result.size).toEqual(2)
  })

  it('abc', () => {
    const result = permutationsWithoutDuplicates('abc')
    expect(result.has('abc')).toEqual(true)
    expect(result.has('acb')).toEqual(true)
    expect(result.has('bac')).toEqual(true)
    expect(result.has('bca')).toEqual(true)
    expect(result.has('cab')).toEqual(true)
    expect(result.has('cba')).toEqual(true)
    expect(result.size).toEqual(6)
  })

})
