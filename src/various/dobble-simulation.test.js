const {anyPreviousSolutionHasTwoCommonElements} = require('./dobble-simulation');

describe('Dobble simulation', () => {

  describe('anyPreviousSolutionHasTwoCommonElements', () => {

    it('case 1', () => {
      const previousSolutions = [new Set(['A', 'B'])]
      const tempSolution = new Set(['A', 'B']);
      expect(anyPreviousSolutionHasTwoCommonElements(previousSolutions, tempSolution)).toBe(true);
    });

    it('case 2', () => {
      const previousSolutions = [new Set(['A', 'B']), new Set(['B', 'C'])]
      const tempSolution = new Set(['B', 'C']);
      expect(anyPreviousSolutionHasTwoCommonElements(previousSolutions, tempSolution)).toBe(true);
    });
  })
})
