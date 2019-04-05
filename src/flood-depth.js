function calculateGreatestOnLeft(A) {
  const result = [0]
  for (let i = 0; i < A.length; i++) {
    if (result[i] < A[i])
      result.push(A[i])
    else
      result.push(result[i])
  }
  return result
}

function calculateGreatestOnRight(A) {
  const inversedA = [...A]
  inversedA.reverse()
  const result = calculateGreatestOnLeft(inversedA);
  result.reverse()
  return result;
}

function solution(A) {
  if (A.length < 3)
    return 0
  let greatestDepth = 0
  const greatestOnTheLeft = calculateGreatestOnLeft(A)
  const greatestOnTheRight = calculateGreatestOnRight(A)
  for (let i = 1; i < A.length; i++) {
    const tempDepth = Math.min(greatestOnTheLeft[i], greatestOnTheRight[i]) - A[i]
    if (greatestDepth < tempDepth)
      greatestDepth = tempDepth
  }
  return greatestDepth
}

module.exports.solution = solution
module.exports.calculateGreatestOnRight = calculateGreatestOnRight