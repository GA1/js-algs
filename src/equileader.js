

function getLeader(A) {
  const occurrences = new Map()
  for (let i = 0; i < A.length; i++) {
    if (!occurrences.has(A[i])) {
      occurrences.set(A[i], 1)
    } else {
      occurrences.set(A[i], occurrences.get(A[i]) + 1)
    }
  }
  let result = -1
  occurrences.forEach((v, k) => {
    if (Math.floor(A.length / 2) < occurrences.get(k)) {
      result = k
    }
  })
  return result
}

function solve(A) {
  const N = A.length
  const leader = getLeader(A)
  const leadersFromBeginningTo = [0]
  for (let i = 0; i < A.length; i++) {
    if (A[i] === leader) {
      leadersFromBeginningTo.push(leadersFromBeginningTo[i] + 1)
    } else {
      leadersFromBeginningTo.push(leadersFromBeginningTo[i])
    }
  }
  const NofAllLeaders = leadersFromBeginningTo[leadersFromBeginningTo.length - 1]
  let result = 0
  for (let i = 0; i < A.length; i++) {
    const leadersOnLeft = leadersFromBeginningTo[i]
    const leadersOnRight = NofAllLeaders - leadersOnLeft
    if (Math.floor(i / 2) < leadersOnLeft && Math.floor((N - i) / 2) < leadersOnRight ) {
      result++
    }
  }
  return result
}

module.exports.solve = solve
module.exports.leader = getLeader