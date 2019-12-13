

function solution(A) {
  const sortedA = [...A]
  sortedA.sort().reverse()
  while (sortedA.length > 2) {

  }
  if (sortedA.length === 2)
    return Math.abs(Math.min(sortedA[1] - sortedA[0], sortedA[0] - sortedA[1]))
  if (sortedA.length === 1)
    return Math.abs(sortedA[0])
  return 0
}

module.exports.solution = solution
//
// A [2, 3]
//
// S [1 -1]
//
// val = |2*1 + 3*(-1)| = |2 -3 | = 1
//
//
// A [2, 3, 5]
//
// S [1 1 -1]
//
// val = |2*1 + 3*1 + 5*(-1)|  = 0
//
// N = 20000
//
// number of possible S  2^20000
//
//
// A = [1 9 4]
// S = [-1, 1, -1]
// val = 4
//
//
// A1 [2 1 2 9 2 2 2]
// A2 [1  2  2  2  2  2  9]
// S2 [-1 1  1  1  1  1  -1]
// Val2 = 0
//
// A3 [180 90 91 20 11 9 4 3] val 0
// A4 [180 90 91 20 11 9 4 3] val 0
// A5 [20 11 9 4 3 1] 0
