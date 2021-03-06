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

function solveSingleCase(m) {
  const N = m[0].length
  const getTrace = () => {
    let result = 0
    for (let i = 0; i < N; i++) {
      result += m[i][i]
    }
    return result
  }

  const getNumberOfRepeatedRows = () => {
    let result = 0
    for (let i = 0; i < N; i++) {
      const elements = new Set()
      for (let j = 0; j < N; j++) {
        elements.add(m[i][j])
      }
      if (elements.size !== N) {
        result++
      }
    }
    return result
  }
  const getNumberOfRepeatedColumns = () => {
    let result = 0
    for (let i = 0; i < N; i++) {
      const elements = new Set()
      for (let j = 0; j < N; j++) {
        elements.add(m[j][i])
      }
      if (elements.size !== N) {
        result++
      }
    }
    return result
  }
  return [getTrace(), getNumberOfRepeatedRows(), getNumberOfRepeatedColumns()]
}

function solveAllCases(lines) {
  const solutions = []
  const numberOfCases = Number(lines[0])
  let i,
    j = 0
  const linesForProblems = lines.slice(1)
  for (i = 0; i < numberOfCases; i++) {
    const N = Number(linesForProblems[j])
    j++
    const m = []
    let k = 0
    for (; k < N; k++) {
      const split = linesForProblems[j + k].split(' ')
      m.push(split.map(s => Number(s)))
    }
    j += N
    const r = solveSingleCase(m)
    console.log(`Case #${i + 1}: ${r[0]} ${r[1]} ${r[2]}`)
  }
  return solutions
}

function main(lines) {
  const solutions = solveAllCases(lines)
  console.log(solutions.join('\n'))
}

// const lines = getLines('./input.txt')
// main(lines)

module.exports.solveAllCases = solveAllCases
module.exports.solveSingleCase = solveSingleCase
