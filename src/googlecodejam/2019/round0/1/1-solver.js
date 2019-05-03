'use strict';

const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

let inputStrings = '';
let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//   inputStrings += inputStdin;
// });
//
// process.stdin.on('end', _ => {
//   inputStrings = inputStrings.trim().split('\n').map(str => str.trim());
//
//   main(inputStrings);
// });


function solveSingleCase(n) {
  const nString = n.toString()
  let toSubtract = 0
  let power = 1
  for (let i = nString.length - 1; 0 <= i; i--) {
    const digit = nString.charAt(i)
    if (digit === '4')
      toSubtract += power
    power *= 10

  }
  return [n - toSubtract, toSubtract]
}


function solveAllCases(inputStrings) {
  const solutions = []
  for (let i = 1; i < inputStrings.length; i++) {
    const inputString = inputStrings[i];
    const result = solveSingleCase(parseInt(inputString))
    solutions.push('Case #' + i.toString() + ': ' + result[0].toString() +  ' ' + result[1].toString())
  }
  return solutions
}


function main(inputStrings) {
  const solutions = solveAllCases(inputStrings)
  console.log(solutions.join('\n'))
}

module.exports.solveAllCases = solveAllCases
module.exports.solveSingleCase = solveSingleCase

