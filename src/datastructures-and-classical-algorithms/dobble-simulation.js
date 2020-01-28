

function anyPreviousSolutionHasTwoCommonElements(previousSolutions, tempSolution) {
  for (let i = 0; i < previousSolutions.length; i++) {
    const previousSolution = previousSolutions[i];
    if (1 < [...previousSolution].filter(letter => tempSolution.has(letter)).length) {
      return true
    }
  }
  return false;
}

function solve(N, K) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').slice(0, N)
  const solutions = []


  while (true) {
    const tempSolution = new Set()
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      tempSolution.add(letter)
      if (anyPreviousSolutionHasTwoCommonElements(solutions, tempSolution)) {
        tempSolution.delete(letter)
      }
      if (tempSolution.size === K)
        break;
    }
    if (tempSolution.size < K)
      break;
    solutions.push(tempSolution)
  }
  return solutions.map(solution => [...solution])
}

const result = solve(7, 3)
console.log(result)


module.exports.solve = solve
module.exports.anyPreviousSolutionHasTwoCommonElements = anyPreviousSolutionHasTwoCommonElements