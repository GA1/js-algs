const fieUtils = require('../../fileUtils');
const getLines = fieUtils.getLines
const saveString = fieUtils.saveString

const solveSingleCase = require('./1-single-case-solver').solveSingleCase


const lines = getLines('./input.in')

const solutions = []

for (let i = 1; i < lines.length; i++) {
  const numbers = lines[i].split(' ');
  const number1 = parseInt(numbers[0])
  const number2 = parseInt(numbers[1])
  const solution = solveSingleCase(number1, number2)
  const solutionString = 'Case #' + i.toString() + ': ' + solution.toString()
  solutions.push(solutionString)
}

saveString('./output.txt', solutions.join('\n'))