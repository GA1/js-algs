function binarySearchFirstOccurrence(A, start, side, X) {
  let end = A.length - 1
  let mid
  let result = -1
  while (start <= end) {
    mid = Math.floor(start + (end - start)/2)
    if (X <= A[mid] * side) {
      result = mid
      start = mid + 1
    } else {
      end = mid -1
    }
  }
  return result
}

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
  let counter = 0
  const incrementCounterOrReturn = (toAdd) => {
    if (1000000000 < counter + toAdd)
      return - 1
    counter += toAdd
  }
  for (let [key, value] of lengthsToOccurrences) {
    if (value < 2) {
      continue
    } else if (value < 4) {
      eligibleSticksForMixedPairs.push(key)
    } else {
      eligibleSticksForMixedPairs.push(key)
      if (X <= key * key) {
        counter += 1
      }
    }
  }
  const sortedEligibleSticksForMixedPairs = [...eligibleSticksForMixedPairs].sort((x, y) => y - x)
  for (let i = 0; i < sortedEligibleSticksForMixedPairs.length; i++) {
    const j = binarySearchFirstOccurrence(sortedEligibleSticksForMixedPairs, i + 1, sortedEligibleSticksForMixedPairs[i], X)
    if (j !== -1) {
      counter += (j - i)
    }
  }
  if (1000000000 < counter)
    return - 1
  return counter
}

module.exports.solution = solution
module.exports.binarySearchFirstOccurrence = binarySearchFirstOccurrence
