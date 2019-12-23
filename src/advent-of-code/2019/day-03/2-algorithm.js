function parse(s) {
  const split = s.split(',')
  const result = []
  for (let i = 0; i < split.length; i++) {
    result.push({
      direction: split[i][0],
      steps: Number(split[i].substring(1)),
    })
  }
  return result
}

function getCoordinatesWithWires(s) {
  function xyToString(x, y) {
    return `${x.toString()},${y.toString()},{}`
  }
  const moves = parse(s)
  const result = new Map()
  let currentYPosition = 0
  let currentXPosition = 0
  let currentLength = 0
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    if (move.direction === 'U') {
      for (let i = 0; i < move.steps; i++) {
        currentYPosition += 1
        result.set(xyToString(currentXPosition, currentYPosition), ++currentLength)
      }
    }
    if (move.direction === 'D') {
      for (let i = 0; i < move.steps; i++) {
        currentYPosition -= 1
        result.set(xyToString(currentXPosition, currentYPosition), ++currentLength)
      }
    }
    if (move.direction === 'R') {
      for (let i = 0; i < move.steps; i++) {
        currentXPosition += 1
        result.set(xyToString(currentXPosition, currentYPosition), ++currentLength)
      }
    }
    if (move.direction === 'L') {
      for (let i = 0; i < move.steps; i++) {
        currentXPosition -= 1
        result.set(xyToString(currentXPosition, currentYPosition), ++currentLength)
      }
    }
  }
  return result
}

function algorithm2(s1, s2) {
  const A = getCoordinatesWithWires(s1)
  const B = getCoordinatesWithWires(s2)
  let best = Number.MAX_VALUE;
  for (let [key, value] of A) {
    if (B.has(key)) {
      const temp = Math.abs(A.get(key)) + Math.abs(B.get(key))
      if (temp < best) {
        best = temp
      }
    }

  }
  return best
}

module.exports.algorithm2 = algorithm2
module.exports.parse = parse
