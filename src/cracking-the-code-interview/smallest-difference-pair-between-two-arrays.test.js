const {
  smallestDifferencePairBetweenTwoArrays,
} = require('./smallest-difference-pair-between-two-arrays')

describe('smallestDifferencePairBetweenTwoArrays', () => {
  it('solves [1] and [1]', () => {
    const result = smallestDifferencePairBetweenTwoArrays([1], [1])
    expect(result).toEqual(0)
  })
  it('solves [2, 19] and [11, 21]', () => {
    const result = smallestDifferencePairBetweenTwoArrays([2, 19], [11, 21])
    expect(result).toEqual(2)
  })
  it('solves [1, 3, 15, 11, 2] and [23,127, 235,19, 8]', () => {
    const result = smallestDifferencePairBetweenTwoArrays(
      [1, 3, 15, 11, 2],
      [23, 127, 235, 19, 8]
    )
    expect(result).toEqual(3)
  })
})
