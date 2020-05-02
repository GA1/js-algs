'use strict'

const { getLines } = require('../../../fileUtils')

// process.stdin.resume()
// process.stdin.setEncoding('utf-8')
//
// let inputStrings = ''
//
// process.stdin.on('data', inputStdin => {
//   inputStrings += inputStdin
// })
//
// process.stdin.on('end', _ => {
//   inputStrings = inputStrings
//     .trim()
//     .split('\n')
//     .map(str => str.trim())
//
//   main(inputStrings)
// })

function solveSingleCase(east, north, tour) {
  const steps = tour.split('')
  if (north === 0 && east === 0) {
    return 0
  } else if (tour.length === 0) {
    return 'IMPOSSIBLE'
  }
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    if (step === 'S') {
      north--
    } else if (step === 'N') {
      north++
    } else if (step === 'E') {
      east++
    } else if (step === 'W') {
      east--
    }
    const currentDistance = Math.abs(east) + Math.abs(north)
    if (currentDistance <= 1 + i) {
      return i + 1
    }
  }
  return 'IMPOSSIBLE'
}

function solveAllCases(lines) {
  const solutions = []
  const numberOfCases = Number(lines[0])
  const linesForProblems = lines.slice(1)
  for (let i = 0; i < numberOfCases; i++) {
    const line = linesForProblems[i]
    const args = line.split(' ')
    const result = solveSingleCase(Number(args[0]), Number(args[1]), args[2])
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
