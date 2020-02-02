// Smallest Difference: Given two arrays of integers, compute the pair of values (one value in each
// array) with the smallest (non-negative) difference. Return the difference.
//   EXAMPLE
// Input: {1, 3,1S, 11, 2}, (23,127, 235,19, 8)
// Output: 3. That is, the pair (11,8).

function smallestDifferencePairBetweenTwoArrays(a1, a2) {
  const compareFunction = (e1, e2) => e1 - e2
  const a1Sorted = [...a1].sort(compareFunction)
  const a2Sorted = [...a2].sort(compareFunction)
  const N = a1.length
  const M = a2.length
  let i = 0,
    j = 0
  let best = Math.abs(a1Sorted[0] - a2Sorted[0])
  while(i < N && j < M) {
    const temp = Math.abs(a1Sorted[i] - a2Sorted[j])
    if (temp < best) {
      best = temp
    }
    if (a1Sorted[i] < a2Sorted[j]) {
      i++
    } else {
      j++
    }
  }
  return best
}

module.exports.smallestDifferencePairBetweenTwoArrays = smallestDifferencePairBetweenTwoArrays
