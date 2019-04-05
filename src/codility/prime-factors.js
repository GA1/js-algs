function solve(N) {
  const sqrtN = Math.sqrt(N)
  const results = []
  for (let i = 1; i <= sqrtN; i++) {
    if (N % i === 0)
      results.push(i)
  }

  const H = results.length

  if (N / results[results.length - 1] !== results[results.length - 1])
    results.push(N / results[results.length - 1])
  for (let j = H - 2; j >= 0; j--) {
    results.push(N / results[j])
  }
  return results
}

module.exports.solve = solve