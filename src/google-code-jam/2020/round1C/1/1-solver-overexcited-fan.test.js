const { solveSingleCase } = require('./1-solver-overexcited-fan')

describe('2020, 1C', () => {
  describe('Overexcited fan', () => {
    it('0, 0, EWSN', () => {
      expect(solveSingleCase(0, 0, 'EWSN')).toEqual(0)
    })
    it('0, 1, ', () => {
      expect(solveSingleCase(0, 0, '')).toEqual(0)
    })
    it('0, 1, ', () => {
      expect(solveSingleCase(0, 1, '')).toEqual('IMPOSSIBLE')
    })
    it('1, 0', () => {
      expect(solveSingleCase(1, 0, '')).toEqual('IMPOSSIBLE')
    })

    it('2, 1, NN', () => {
      expect(solveSingleCase(2, 1, 'NN')).toEqual('IMPOSSIBLE')
    })
    it('4, 4, SSSS', () => {
      expect(solveSingleCase(4, 4, 'SSSS')).toEqual(4)
    })
    it('3, 0, SNSS', () => {
      expect(solveSingleCase(3, 0, 'SNSS')).toEqual('IMPOSSIBLE')
    })
    it('2, 10, NSNNSN', () => {
      expect(solveSingleCase(2, 10, 'NSNNSN')).toEqual('IMPOSSIBLE')
    })
    it('0, 1, S', () => {
      expect(solveSingleCase(0, 1, 'S')).toEqual(1)
    })
    it('2, 7, SSSSSSSS', () => {
      expect(solveSingleCase(2, 7, 'SSSSSSSS')).toEqual(5)
    })
  })
})
