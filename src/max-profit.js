
function solve(A) {
  const mins = calculateMinsFromLeft(A)
  const maxs = calculateMaxFromRight(A)
  let bestProfit = 0
  for (let i = 0; i < mins.length; i++) {
    const currProfit = maxs[i] - mins[i];
    if (bestProfit < currProfit) {
      bestProfit = currProfit
    }
  }
  return bestProfit
}

function calculateMinsFromLeft(A) {
  const result = []
  let tempMin = 400000
  for (let i = 0; i < A.length; i++) {
    const e = A[i];
    if (e < tempMin) {
      tempMin = e
    }
    result.push(tempMin)
  }
  return result
}

function calculateMaxFromRight(A) {
  const result = []
  let tempMax = 0
  for (let i = A.length - 1; i >= 0; i--) {
    const e = A[i];
    if (tempMax < e) {
      tempMax = e
    }
    result.push(tempMax)
  }
  result.reverse()
  return result
}

module.exports.solve = solve