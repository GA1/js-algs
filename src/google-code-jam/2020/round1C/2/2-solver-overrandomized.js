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

function solveSingleCase(Q, R, U) {
  const N = 10000
  const qSingleDigit = []
  const rSingleLetter = []

  const possibleLetters = new Set()
  for (let i = 0; i < N; i++) {
    const r = R[i]
    r.split('').forEach(c => possibleLetters.add(c))
  }

  const qrSingle = []
  for (let i = 0; i < N; i++) {
    const q = Q[i]
    const r = R[i]
    if (q < 10) {
      qrSingle.push([q, r])
      qSingleDigit.push(q)
      rSingleLetter.push(r)
    }
  }
  qrSingle.sort((a, b) => a[0] - b[0])
  const result = []
  for (let i = 0; i < qrSingle.length; i++) {
    if (
      qrSingle[i][0] === result.length + 1 &&
      result.findIndex(x => x === qrSingle[i][1]) === -1
    ) {
      result.push(qrSingle[i][1])
    }
  }
  for (let i = 0; i < result.length; i++) {
    const r = result[i]
    possibleLetters.delete(r)
  }
  const zero = Array.from(possibleLetters)[0]
  return zero + result.join('')
}

function solveAllCases(lines) {
  const numberOfProblems = Number(lines[0])
  for (let i = 0; i < numberOfProblems; i++) {
    const linesForProblems = lines.slice(1 + 10001 * i, 1 + 10001 * (i + 1))
    const Q = []
    const R = []
    const U = Number(linesForProblems[0])
    for (let j = 1; j < 10001; j++) {
      const split = linesForProblems[j].split(' ')
      const q = Number(split[0])
      const r = split[1]
      Q.push(q)
      R.push(r)
    }
    const solution = solveSingleCase(Q, R, U)
    console.log(`Case #${i + 1}: ${solution}`)
  }
}

function main(lines) {
  solveAllCases(lines)
}

// const lines = getLines('./input.txt')
// main(lines)

module.exports.solveAllCases = solveAllCases
module.exports.solveSingleCase = solveSingleCase
