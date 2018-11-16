function quick(A) {
  const pivot = A[0]
  let i = 1, j = A.length - 1
  while (true) {
    while (A[i] < pivot) {
      i++
    }
    while (pivot < A[j]){
      j--
    }
    if (i > j)
      break;
    swap(A, i, j)
  }
  swap(A, 0, i - 1)
  return i - 1
}

function swap(A, i, j) {
  const temp = A[i]
  A[i] = A[j]
  A[j] = temp
}

module.exports.quick = quick;