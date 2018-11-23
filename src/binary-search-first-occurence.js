

function solve(A, e) {
  function solve (A, start, end, e, bestUntilNow) {
    if (start > end) {
      if (A[start] === e)
        return start
      return bestUntilNow
    } else {
      const mid = start + Math.floor((end - start) / 2)
      if (A[mid] === e) {
        return solve(A, start, mid - 1, e, mid)
      } else if (e < A[mid]) {
        return solve(A, start, mid - 1, e, bestUntilNow)
      } else {
        return solve(A, mid + 1, end, e, bestUntilNow)
      }
    }
  }
  return solve(A, 0, A.length, e, -1)
}

module.exports.solve = solve