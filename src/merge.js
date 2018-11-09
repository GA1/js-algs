
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

module.exports.merge = merge;