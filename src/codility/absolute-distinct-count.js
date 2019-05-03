

function solution(A) {
  const absoluteDistinctElements = new Set()
  for (let i = 0; i < A.length; i++) {
    const aElement = A[i];
    absoluteDistinctElements.add(Math.abs(aElement))
  }
  return absoluteDistinctElements.size
}


module.exports.solve = solution