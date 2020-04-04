'use strict'

const { getLines } = require('../../../fileUtils')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputStrings = ''

process.stdin.on('data', inputStdin => {
  inputStrings += inputStdin
})

process.stdin.on('end', _ => {
  inputStrings = inputStrings
    .trim()
    .split('\n')
    .map(str => str.trim())

  main(inputStrings)
})

const TYPES = Object.freeze({
  START: 1,
  END: 2,
})

function solveSingleCase(jobs) {
  const sortedJobsStartsEnds = []
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i]
    sortedJobsStartsEnds.push({
      time: job[0],
      correspondingEnd: job[1],
      type: TYPES.START,
      id: i,
    })
    sortedJobsStartsEnds.push({
      time: job[1],
      type: TYPES.END,
    })
  }
  sortedJobsStartsEnds.sort((j1, j2) => {
    const timeResult = j1.time - j2.time
    if (timeResult === 0) {
      if (j1.type === TYPES.END) {
        return -1
      } else {
        return 1
      }
    } else {
      return timeResult
    }
  })
  const result = []
  let emptyJob = {
    time: -1,
    correspondingEnd: -1,
    type: TYPES.START,
    idle: true,
  }
  let currentCJob = emptyJob,
    currentJJob = emptyJob
  let currentJobsCounter = 0
  for (let i = 0; i < sortedJobsStartsEnds.length; i++) {
    const e = sortedJobsStartsEnds[i]

    if (e.type === TYPES.START) {
      if (currentJobsCounter === 0) {
        result.push({
          person: 'C',
          id: e.id,
        })
        currentCJob = {
          ...e,
        }
      } else if (currentJobsCounter === 1) {
        if (currentCJob.idle) {
          result.push({
            person: 'C',
            id: e.id,
          })
          currentCJob = {
            ...e,
          }
        } else {
          result.push({
            person: 'J',
            id: e.id,
          })
          currentJJob = {
            ...e,
          }
        }
      } else {
        return 'IMPOSSIBLE'
      }
      currentJobsCounter++
    } else {
      if (currentCJob.correspondingEnd === e.time) {
        currentCJob = emptyJob
      } else {
        currentJJob = emptyJob
      }
      currentJobsCounter--
    }
  }
  result.sort((r1, r2) => r1.id - r2.id)
  return result.map(r => r.person).join('')
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
    const jobs = []
    let k = 0
    for (; k < N; k++) {
      const split = linesForProblems[j + k].split(' ')
      jobs.push([Number(split[0]), Number(split[1])])
    }
    j += N
    const result = solveSingleCase(jobs)
    console.log(`Case #${i + 1}: ${result}`)
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
