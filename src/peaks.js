function getPrimeFactors(N) {
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

function solve(A) {
  const N = A.length;
  const primeFactors = getPrimeFactors(N)
  const P = primeFactors.length
  const peaks = findPeakPositions(A)
  for (let i = 1; i < primeFactors.length; i++) {
    if (canBeDividedInBlocks(N, primeFactors[i], peaks)) {
      return primeFactors[P - i - 1]
    }
  }
  return 0
}

function canBeDividedInBlocks(N, blockSize, peaks) {
  let j = 0
  for (let i = 0; i < N; i = i + blockSize) {
    while (true) {
      if (i + blockSize <= peaks[j] || j === peaks.length)
        return false
      if (peaks[j] < i) {
        j++
      }
      if (peaks[j] < i + blockSize) {
        break
      }
    }
  }
  return true

}

function findPeakPositions(A) {
  const peakPositions = []
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1])
      peakPositions.push(i)
  }
  return peakPositions
}

module.exports.solve = solve
module.exports.findPeakPositions = findPeakPositions