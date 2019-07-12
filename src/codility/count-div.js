
function solution(A, B, K) {
  const divisibleClosestToA = A%K === 0 ? A : A + (K - A%K)
  const divisibleClosestToB = B%K === 0 ? B : B - B%K
  return (divisibleClosestToB - divisibleClosestToA) / K + 1
}

module.exports.solution = solution
