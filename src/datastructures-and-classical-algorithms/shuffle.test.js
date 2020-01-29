const {shuffle} = require('./shuffle');

describe('shuffle', () => {

  const usWithinDeviation = (value, expectedValue, deviation) => {
    return Math.abs(expectedValue - value) <= deviation
  }

  it('checks in range', () => {
    expect(usWithinDeviation(181, 200, 20)).toEqual(true)
    expect(usWithinDeviation(180, 200, 20)).toEqual(true)
    expect(usWithinDeviation(179, 200, 20)).toEqual(false)
    expect(usWithinDeviation(219, 200, 20)).toEqual(true)
    expect(usWithinDeviation(220, 200, 20)).toEqual(true)
    expect(usWithinDeviation(221, 200, 20)).toEqual(false)
  })

  it('shuffles uniformly', () => {
    const toShuffle = ['a', 'b', 'c', 'd', 'e']
    const N = 1000
    const results = new Map([
      ['a0', 0], ['a1', 0], ['a2', 0], ['a3', 0], ['a4', 0],
      ['b0', 0], ['b1', 0], ['b2', 0], ['b3', 0], ['b4', 0],
      ['c0', 0], ['c1', 0], ['c2', 0], ['c3', 0], ['c4', 0],
      ['d0', 0], ['d1', 0], ['d2', 0], ['d3', 0], ['d4', 0],
      ['e0', 0], ['e1', 0], ['e2', 0], ['e3', 0], ['e4', 0],
    ])
    for (let i = 0; i < N; i++) {
      const shuffled = shuffle(toShuffle)
      for (let j = 0; j < toShuffle.length; j++) {
        const key = shuffled[j] + String(j);
        results.set(key, results.get(key) + 1)
      }
    }
    const keys = results.keys()
    for (let i = 0; i < results.size; i++) {
      const k = keys.next().value
      expect(usWithinDeviation(results.get(k), 200, 50)).toEqual(true)
    }
  });
})
