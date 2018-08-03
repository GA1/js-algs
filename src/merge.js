
function merge(a, b) {
  var N = a.length
  var M = b.length
  let res = new Array();
  var i = 0, j = 0
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