
function binarySearchOfLastOccurrence(A, start, end, e, bestUntilNow) {
  if (start > end) {
    if (A[start] === e)
      return start
    return bestUntilNow
  } else {
    const mid = start + Math.floor((end - start) / 2)
    if (A[mid] <= e) {
      return binarySearchOfLastOccurrence(A, mid + 1, end, e, mid)
    } else if (e < A[mid]) {
      return binarySearchOfLastOccurrence(A, start, mid - 1, e, bestUntilNow)
    } else {
      return binarySearchOfLastOccurrence(A, mid + 1, end, e, bestUntilNow)
    }
  }
}

function solution(A) {
  let total = 0
  const leftRightMost = []
  for (let i = 0; i < A.length; i++) {
    const radius = A[i];
    leftRightMost.push({
      left: i - radius,
      right: i + radius,
    })
  }
  leftRightMost.sort((x, y) => x.left - y.left)
  const leftMost = leftRightMost.map(x => x.left)
  for (let i = 0; i < leftRightMost.length; i++) {
    const intersections =
      Math.max(binarySearchOfLastOccurrence(leftMost, i + 1, leftRightMost.length, leftRightMost[i].right,0) - (i), 0)
    total += intersections
    if (total > 10000000) {
      return -1
    }
  }
  return total
}

module.exports.solution = solution
module.exports.binarySearchOfLastOccurrence = binarySearchOfLastOccurrence