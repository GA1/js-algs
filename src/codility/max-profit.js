
function solution(A) {
  let min = A[0]
  let bestProfit = A[1] - A[0]
  for (let i = 2; i < A.length; i++) {
    if (A[i - 1] < min)
      min = A[i - 1]
    if (A[i] - min)
      bestProfit = A[i] - min
  }
  return bestProfit > 0 ? bestProfit: 0
}

module.exports.solution = solution
