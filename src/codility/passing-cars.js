

function solve(A) {
  let carsGoingRight = 0
  let crossings = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 1) {
      crossings += carsGoingRight
      if (1000000000 < crossings) {
        return -1
      }
    } else {
      carsGoingRight++
    }
  }
  return crossings

}

module.exports.solve = solve
