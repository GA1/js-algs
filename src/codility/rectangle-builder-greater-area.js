
function binarySearchFirstOccurrence(B, start, side, X) {
  let end = B.length - 1
  let mid
  while (start <= end) {
    mid = Math.floor(start + (end - start)/2)
    if (X <= B[mid] * side && (mid + 1 === B.length || B[mid + 1] * side) < X) {
      return mid
    } else if (B[mid] * side < X) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return -1
}

// not passing 100% in codility
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
  const incrementCounterOrReturn = (toAdd) => {
    if (1000000000 < counter + toAdd)
      return - 1
    counter += toAdd
  }
  const eligibleSticksForMixedPairs = []
  let counter = 0
  for (let [key, value] of lengthsToOccurrences) {
    if (value < 2) {
      continue
    } else if (value < 4) {
      eligibleSticksForMixedPairs.push(key)
    } else {
      eligibleSticksForMixedPairs.push(key)
      if (X <= key * key) {
        incrementCounterOrReturn(1)
      }
    }
  }
  const sortedEligibleSticksForMixedPairs = [...eligibleSticksForMixedPairs].sort((x, y) => y - x)
  for (let i = 0; i < sortedEligibleSticksForMixedPairs.length; i++) {
    const j = binarySearchFirstOccurrence(sortedEligibleSticksForMixedPairs, i + 1, sortedEligibleSticksForMixedPairs[i], X)
    if (j !== -1) {
      incrementCounterOrReturn(j - i)
    }
  }
  return counter
}

module.exports.solution = solution
module.exports.binarySearchFirstOccurrence = binarySearchFirstOccurrence
