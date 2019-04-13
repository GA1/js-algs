const solveSingleCase = require('./2-solver').solveSingleCase;
const solveAllCases = require('./2-solver').solveAllCases;

describe('1', () => {

  describe('getTwoPrimeFactorsOfProduct', () => {

    it('ES', () => {
      expect(solveSingleCase('ES')).toEqual('SE');
      expect(solveSingleCase('EESSSESE')).toEqual('SSEEESES');
    });

  })

  describe('solveAllCases', () => {

    it('2, 2, ES, 5, EESSSESE', () => {
      expect(solveAllCases([2, 2, 'ES', 5, 'EESSSESE'])).toEqual(['Case #1: SE', 'Case #2: SSEEESES']);
    });

  })

})