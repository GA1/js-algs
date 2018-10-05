const solver = require('../hexagonalGrid');
const HORIZONTAL = solver.HORIZONTAL
const VERTICAL = solver.VERTICAL
const DIAGONAL = solver.DIAGONAL

describe('hexagonalGrid solver', () => {

  describe('getTilesPossibleFromThePosition', () => {
    it('for a = \'0\' and a = \'0\' and start point in (\'0\', a) should return correct moves' , () => {
      expect(solver.getTilesPossibleFromThePosition('0', '0', 0, 'a')).toEqual(new Set([VERTICAL]));
    });

    it('for a = \'0\' and a = \'0\' and start point in (\'0\', b) should return correct moves' , () => {
      expect(solver.getTilesPossibleFromThePosition('0', '0', 0, 'b')).toEqual(new Set());
    });

    it('for a = \'0\' and a = \'0\' and start point in (\'0\', a) should return correct moves' , () => {
      expect(solver.getTilesPossibleFromThePosition('0', '1', 0, 'a')).toEqual(new Set());
    })

    it('for a = \'00\' and a = \'00\' and start point in (\'0\', a) should return correct moves' , () => {
      expect(solver.getTilesPossibleFromThePosition('00', '00', 0, 'a')).toEqual(new Set([VERTICAL, HORIZONTAL]));
    })

    it('for a = \'00\' and a = \'00\' and start point in (\'0\', b) should return correct moves' , () => {
      expect(solver.getTilesPossibleFromThePosition('00', '00', 0, 'b')).toEqual(new Set([DIAGONAL, HORIZONTAL]));
    })

    it('for a = \'01\' and a = \'01\' and start point in (\'0\', a) should return correct moves' , () => {
      expect(solver.getTilesPossibleFromThePosition('01', '01', 0, 'a')).toEqual(new Set([VERTICAL]));
    })

    it('for a = \'01\' and a = \'01\' and start point in (\'0\', b) should return correct moves' , () => {
      expect(solver.getTilesPossibleFromThePosition('01', '01', 0, 'b')).toEqual(new Set([]));
    })

  })

})
