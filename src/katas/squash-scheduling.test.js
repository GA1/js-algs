const { findMaxDiffInCounterTable } = require('./squash-scheduling')

describe('squash scheduling', () => {
  it('findMaxDiffInCounterTable', () => {
    expect(findMaxDiffInCounterTable([1, 2, 3, 1])).toBe(2)
    expect(findMaxDiffInCounterTable([3, -2])).toBe(5)
  })

})
