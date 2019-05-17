

function solution(A) {
  const absoluteDistinctElements = new Set()
  for (let i = 0; i < A.length; i++) {
    const aElement = A[i];
    absoluteDistinctElements.add(Math.abs(aElement))
  }
  return absoluteDistinctElements.size
}

function solution(A) {
  var abs = A.map(function (val) {
    return Math.abs(val);
  }).filter(function (val, index, array) {
    for (let key = 0; key < A.length; key++) {
      if (index !== Number(key) && val === array[key]) {
        return false
      }
      return true
    }
  })
  return abs.length
}


  module.exports.solve = solution