const solveSingleCase = require('./2-single-case-solver').solveSingleCase
const lineReader = require('./line-reader');
const getLines = lineReader.getLines
const saveString = lineReader.saveString


const lines = getLines()

const solutions = []

for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  const split = line.split(' ')
  const C = parseFloat(split[0]);
  const F = parseFloat(split[1]);
  const X = parseFloat(split[2]);
  const rawSolution = solveSingleCase(C, F, X)
  solutions.push('Case #' + i + ': ' + rawSolution)
}

saveString(solutions.join('\n'))

