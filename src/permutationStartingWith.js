
function solve(A) {
  const numbers = new Set()
  const N = A.length
  for (let i = 0; i < N; i++) {
    const e = A[i]
    if (N < e || numbers.has(e)) {
      return 0
    }
    numbers.add(A[i])
  }
  return 1
}

module.exports.solve = solve;