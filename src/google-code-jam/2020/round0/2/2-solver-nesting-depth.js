'use strict'

const { getLines } = require('../../../fileUtils')

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
//
// let inputStrings = ''
//
// process.stdin.on('data', inputStdin => {
//   inputStrings += inputStdin;
// });
//
// process.stdin.on('end', _ => {
//   inputStrings = inputStrings.trim().split('\n').map(str => str.trim());
//
//   main(inputStrings);
// });

function solveSingleCase(s) {
  const digitsInString = s.split('')
  const result = []
  let currentOpened = 0
  for (let i = 0; i < s.length; i++) {
    const digit = Number(digitsInString[i]);
    for (; currentOpened < digit; currentOpened++) {
      result.push('(')
    }
    for (; currentOpened > digit; currentOpened--) {
      result.push(')')
    }
    result.push(digit)
  }
  for (let i = 0; i < currentOpened; i++) {
    result.push(')')
  }
  return result.join('')
}

function solveAllCases(lines) {
  const solutions = []
  const numberOfCases = Number(lines[0])
  const linesForProblems = lines.slice(1)
  for (let i = 0; i < numberOfCases; i++) {
    const line = linesForProblems[i]
    const result = solveSingleCase(line)
    console.log(`Case #${i + 1}: ${result}`)
  }
  return solutions
}

function main(lines) {
  solveAllCases(lines)
}

// const lines = getLines('./input.txt')
// main(lines)

module.exports.solveAllCases = solveAllCases
module.exports.solveSingleCase = solveSingleCase
