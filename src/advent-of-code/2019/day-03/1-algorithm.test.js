const {parse, algorithm1} = require('./1-algorithm');

describe('advent of code 2019, day 3, part 1', () => {
  describe('parse', () => {
    it('U7,R6,D4,L4', () => {
      const expected = [{direction: 'U', steps: 7}, {direction: 'R', steps: 6}, {direction: 'D', 'steps': 4}, {direction: 'L', steps: 4}]
      expect(parse('U7,R6,D4,L4')).toEqual(expected)
    });
  })

  describe('algorithm', () => {
    it('U1,R1   and   R1,L1', () => {
      expect(algorithm1('U1,R1', 'R1,U1')).toBe(2)
      expect(algorithm1('R1,U1', 'U1,R1', )).toBe(2)
    });

    it('U5,R1   and   R1,U1', () => {
      expect(algorithm1('U1,R15', 'R1,U1')).toBe(2)
      expect(algorithm1('R1,U1', 'U1,R15', )).toBe(2)
    })

    it('U1,R1   and   R1,U5', () => {
      expect(algorithm1('U1,R1', 'R1,U5')).toBe(2)
      expect(algorithm1('R1,U5', 'U1,R1', )).toBe(2)
    })

    it('U3,R3,U2   and   R1,U5,R2', () => {
      expect(algorithm1('U3,R3,U2', 'R1,U5,R2')).toBe(4)
      expect(algorithm1('R1,U5,R2', 'U3,R3,U2', )).toBe(4)
    })

    it('R8,U5,L5,D3   and   R8,U5,L5,D3', () => {
      expect(algorithm1('R8,U5,L5,D3', 'R8,U5,L5,D3')).toBe(1)
    });

    it('R8,U5,L5,D3   and   U7,R6,D4,L4', () => {
      expect(algorithm1('R8,U5,L5,D3', 'U7,R6,D4,L4')).toBe(6)
    });

    it('R75,D30,R83,U83,L12,D49,R71,U7,L72   and   U62,R66,U55,R34,D71,R55,D58,R83', () => {
      expect(algorithm1('R75,D30,R83,U83,L12,D49,R71,U7,L72', 'U62,R66,U55,R34,D71,R55,D58,R83')).toBe(159)
    });

    it('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51   and   U98,R91,D20,R16,D67,R40,U7,R15,U6,R7', () => {
      expect(algorithm1('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51', 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7')).toBe(135)
    });
  })
})
