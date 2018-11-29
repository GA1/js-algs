

function solve(A) {
  const carsGoingRightOnTheLeftFromIndex = []
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
	  if (A[i] === 0) {
	    sum++
	  }
    carsGoingRightOnTheLeftFromIndex[i] = sum
  }
  let crossings = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 1) {
      crossings += carsGoingRightOnTheLeftFromIndex[i]
      if (1000000000 < crossings) {
        return -1
      }
    }
  }
  return crossings
}

module.exports.solve = solve
