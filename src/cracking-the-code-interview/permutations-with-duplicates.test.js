const { permutationsWithDuplicates } = require('./permutations-with-duplicates')

describe('permutationsWithDuplicates', () => {
  describe('when string has no duplicates', () => {
    it('a', () => {
      const result = permutationsWithDuplicates('a')
      expect(result.has('a')).toEqual(true)
      expect(result.size).toEqual(1)
    })

    it('ab', () => {
      const result = permutationsWithDuplicates('ab')
      expect(result.has('ab')).toEqual(true)
      expect(result.has('ba')).toEqual(true)
      expect(result.size).toEqual(2)
    })

    it('abc', () => {
      const result = permutationsWithDuplicates('abc')
      expect(result.has('abc')).toEqual(true)
      expect(result.has('acb')).toEqual(true)
      expect(result.has('bac')).toEqual(true)
      expect(result.has('bca')).toEqual(true)
      expect(result.has('cab')).toEqual(true)
      expect(result.has('cba')).toEqual(true)
      expect(result.size).toEqual(6)
    })
  })
  describe('when string has duplicates', () => {
    it('aa', () => {
      const result = permutationsWithDuplicates('aa')
      expect(result.has('aa')).toEqual(true)
      expect(result.size).toEqual(1)
    })

    it('aab', () => {
      const result = permutationsWithDuplicates('aab')
      expect(result.has('aab')).toEqual(true)
      expect(result.has('aba')).toEqual(true)
      expect(result.has('baa')).toEqual(true)
      expect(result.size).toEqual(3)
    })
  })
})
