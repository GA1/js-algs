const { solveSingleCase } = require('./3-solver-parenting-partnering-returns')

describe('2020', () => {
  describe('23rd task: nestingDepth', () => {
    it('[[360, 480]]', () => {
      expect(solveSingleCase([[360, 480]])).toEqual('C')
    })
    it('[[0, 4], [2, 6]]', () => {
      expect(
        solveSingleCase([
          [0, 4],
          [2, 6],
        ])
      ).toEqual('CJ')
    })
    it('[[2, 6], [0, 4]]', () => {
      expect(
        solveSingleCase([
          [2, 6],
          [0, 4],
        ])
      ).toEqual('JC')
    })
    it('[[0, 4], [2, 6], [4, 8]]', () => {
      expect(
        solveSingleCase([
          [0, 4],
          [2, 6],
          [4, 8],
        ])
      ).toEqual('CJC')
    })
    it('[[360, 480], [420, 540], [600, 660]]', () => {
      expect(
        solveSingleCase([
          [360, 480],
          [420, 540],
          [600, 660],
        ])
      ).toEqual('CJC')
    })
    it('[[0, 1440], [1, 3], [2, 4]]', () => {
      expect(
        solveSingleCase([
          [0, 1440],
          [1, 3],
          [2, 4],
        ])
      ).toEqual('IMPOSSIBLE')
    })
    it('[[99, 150], [1, 100], [100, 301], [2, 5], [150, 250]]', () => {
      expect(
        solveSingleCase([
          [99, 150],
          [1, 100],
          [100, 301],
          [2, 5],
          [150, 250],
        ])
      ).toEqual('JCCJJ')
    })
    it('[[4, 6], [1, 5], [5, 8], [2, 3], [6, 7]]', () => {
      expect(
        solveSingleCase([
          [4, 6],
          [1, 5],
          [5, 8],
          [2, 3],
          [6, 7],
        ])
      ).toEqual('JCCJJ')
    })
    it('[[0, 720], [720, 1440]]', () => {
      expect(
        solveSingleCase([
          [0, 720],
          [720, 1440],
        ])
      ).toEqual('CC')
    })
  })
})
