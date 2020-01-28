

function binarySearchFirstOccurrence2(A, e) {
  let start = 0
  let end = A.length - 1
  let mid
  while (start <= end) {
    mid = Math.floor(start + (end - start)/2)
    if (A[mid] === e && (mid - 1 < 0 || A[mid - 1] < e)) {
      return mid
    } else if (e <= A[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return -1
}

module.exports.binarySearchFirstOccurence2 = binarySearchFirstOccurrence2
