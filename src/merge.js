
function mergeRecursive(a, b) {
  function mergeRecursive(A, i, B, j, result) {
    const N = A.length;
    const M = B.length;
    if (i === N && j === M)
      return result
    else {
      if (i < N && j < M) {
        if (A[i] <= B[j]) {
          result.push(A[i])
          return mergeRecursive(A, i + 1, B, j, result)
        } else {
          result.push(B[j])
          return mergeRecursive(A, i, B, j + 1, result)
        }
      }
      for (; i < N; i++)
        result.push(A[i])
      for (; j < M; j++)
        result.push(B[j])
      return result
    }
  }
  const result = []
  return mergeRecursive(a, 0, b, 0, result)
}

function merge(a, b) {
  const N = a.length
  const M = b.length
  const res = new Array();
  let i = 0, j = 0
  for (; i < N && j < M;) {
    if (a[i] <= b[j]) {
      res.push(a[i])
      i++
    } else {
      res.push(b[j])
      j++
    }
  }
  for (; i < N; i++)
    res.push(a[i])
  for (; j < M; j++)
    res.push(b[j])
  return res
}

module.exports.mergeRecursive = mergeRecursive;
module.exports.merge = merge;