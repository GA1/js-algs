

function binarySearchFirstOccurrence3(A, e) {
  let start = 0
  let end = A.length - 1
  let mid
  let result = -1
  while (start <= end) {
    mid = Math.floor(start + (end - start)/2)
    if (A[mid] === e) {
      result = mid
      end = mid - 1
    } else if (e < A[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return result
}

module.exports.binarySearchFirstOccurrence3 = binarySearchFirstOccurrence3
