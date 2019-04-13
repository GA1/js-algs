'use strict';

const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

let inputStrings = '';

process.stdin.on('data', inputStdin => {
  inputStrings += inputStdin;
});

process.stdin.on('end', _ => {
  inputStrings = inputStrings.trim().split('\n').map(str => str.trim());

  main(inputStrings);
});


function solveSingleCase(s) {
  const result = []
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i)
    if (c === 'E')
      result.push('S')
    else
      result.push('E')
  }
  return result.join('')
}

function solveAllCases(inputStrings) {
  const solutions = []
  for (let i = 1; i < inputStrings.length; i+=2) {
    const inputString = inputStrings[i+1];
    const result = solveSingleCase(inputString)
    solutions.push('Case #' + ((i+1)/2).toString() + ': ' + result)
  }
  return solutions
}

function main(inputStrings) {
  const solutions = solveAllCases(inputStrings)
  console.log(solutions.join('\n'))
}

module.exports.solveAllCases = solveAllCases
module.exports.solveSingleCase = solveSingleCase