// UNFINISHED, giving incorrect results for some input, and not optimal

const solve = (A, B, C) => {
  const N = A.length
  function allPlanksAreNailed(nailed) {
    return nailed.size === N
  }
  function getPlanksNailedWithNail(nailIndex) {
    const result = []
    for (let i = 0; i < A.length; i++) {
      if (A[i] <= C[nailIndex] && C[nailIndex] <= B[i])
        result.push(C[i])
    }
    return result
  }
  const nailed = new Set()
  let i = 0
  while (i < C.length) {
    const temp = getPlanksNailedWithNail(i)
    for (let j = 0; j < temp.length; j++) {
      nailed.add(temp[j])
    }
    if (allPlanksAreNailed(nailed)) {
      return i + 1
    }
    i++
  }
  return -1
}

module.exports.solve = solve