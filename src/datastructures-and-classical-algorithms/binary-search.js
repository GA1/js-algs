

function solve(A, e) {
  function solve (A, start, end, e) {
    if (start > end) {
      if (A[start] === e)
        return start
      return -1
    } else {
      const mid = start + Math.floor((end - start) / 2)
      if (A[mid] === e) {
        return mid
      } else if (e < A[mid]) {
        return solve(A, start, mid - 1, e)
      } else {
        return solve(A, mid + 1, end, e)
      }
    }
  }
  return solve(A, 0, A.length, e)
}

module.exports.solve = solve