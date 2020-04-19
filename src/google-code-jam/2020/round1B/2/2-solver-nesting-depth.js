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

function solveSingleCase(R, S) {
  let i = R*S - R
  let j = R - 1
  const result = []
  while (i >= S) {
    result.push([i, j])
    if ((i + j - 1) % S === 0) {
      j--
    }
    i--
  }
  return result
}

function solveAllCases(lines) {
  const solutions = []
  const linesForProblems = lines.slice(1)
  const numberOfProblems = linesForProblems.length;
  for (let i = 0; i < numberOfProblems; i++) {
    const split = linesForProblems[i].split(' ')
    const r = solveSingleCase(Number(split[0]), Number(split[1]))
    console.log(`Case #${i + 1}: ${r.length}`)
    for (let l = 0; l < r.length; l++) {
      console.log(`${r[l][0]} ${r[l][1]}`)
    }
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
