const { solveSingleCase } = require('./2-solver-nesting-depth')

describe('2020', () => {
  describe('2nd task nestingDepth', () => {
    it('0', () => {
      expect(solveSingleCase('0')).toEqual('0')
    })
    it('1', () => {
      expect(solveSingleCase('1')).toEqual('(1)')
    })
    it('2', () => {
      expect(solveSingleCase('2')).toEqual('((2))')
    })
    it('22', () => {
      expect(solveSingleCase('22')).toEqual('((22))')
    })

    it('0000', () => {
      expect(solveSingleCase('0000')).toEqual('0000')
    })
    it('101', () => {
      expect(solveSingleCase('101')).toEqual('(1)0(1)')
    })
    it('111000', () => {
      expect(solveSingleCase('111000')).toEqual('(111)000')
    })
    it('1212', () => {
      expect(solveSingleCase('1212')).toEqual('(1(2)1(2))')
    })
    it('12341234', () => {
      expect(solveSingleCase('12341234')).toEqual('(1(2(3(4)))1(2(3(4))))')
    })
  })
})
