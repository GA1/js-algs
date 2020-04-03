const solveSingleCase = require('./1-solver').solveSingleCase
const solveAllCases = require('./1-solver').solveAllCases

describe('2020', () => {
  describe('1', () => {
    describe('getTwoPrimeFactorsOfProduct', () => {
      it('34', () => {
        expect(solveSingleCase(34)).toEqual([33, 1])
      })

      it('444', () => {
        expect(solveSingleCase(444)).toEqual([333, 111])
      })

      it('224222', () => {
        expect(solveSingleCase(224222)).toEqual([223222, 1000])
      })

      it('84', () => {
        expect(solveSingleCase(84)).toEqual([83, 1])
      })
    })

    describe('solveAllCases', () => {
      it('2, 4, 940', () => {
        expect(solveAllCases([2, 4, 940])).toEqual([
          'Case #1: 3 1',
          'Case #2: 930 10',
        ])
      })
    })
  })
})
