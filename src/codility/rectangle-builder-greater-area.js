function solution(A, X) {
  const lengthsToOccurrences = new Map()
  for (let i = 0; i < A.length; i++) {
    const a = A[i]
    if (!lengthsToOccurrences.has(a)) {
      lengthsToOccurrences.set(a, 1)
    } else if (lengthsToOccurrences.get(a) < 4) {
      lengthsToOccurrences.set(a, lengthsToOccurrences.get(a) + 1)
    }
  }

  const eligibleSticksForMixedPairs = []
  const eligibleSticksForSquares = []
  for (let [key, value] of lengthsToOccurrences) {
    if (4 <= value) {
      eligibleSticksForMixedPairs.push(key)
      eligibleSticksForSquares.push(key)
    } else if (value === 2 || value === 3) {
      eligibleSticksForMixedPairs.push(key)
    }
  }
  const sortedEligibleSticks = [...eligibleSticksForMixedPairs].sort((x, y) => y - x)
  let counter = 0
  const incrementCounterOrReturn = () => {
    if (1000000000 < counter)
      return - 1
    counter++
  }
  for (let i = 0; i < eligibleSticksForSquares.length; i++) {
    if (X <= eligibleSticksForSquares[i] * eligibleSticksForSquares[i]) {
      incrementCounterOrReturn()
    }
  }
  for (let i = 0; i < sortedEligibleSticks.length; i++) {
    for (let j = i + 1; j < sortedEligibleSticks.length; j++) {
      if (X <= sortedEligibleSticks[i] * sortedEligibleSticks[j]) {
        incrementCounterOrReturn()
      } else {
        break
      }
    }
  }
  return counter
}

module.exports.solution = solution
