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
    return `${x.toString()},${y.toString()}`
  }
  const moves = parse(s)
  const result = new Set()
  let currentYPosition = 0
  let currentXPosition = 0
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    if (move.direction === 'U') {
      for (let i = 0; i < move.steps; i++) {
        currentYPosition += 1
        result.add(xyToString(currentXPosition, currentYPosition))
      }
    }
    if (move.direction === 'D') {
      for (let i = 0; i < move.steps; i++) {
        currentYPosition -= 1
        result.add(xyToString(currentXPosition, currentYPosition))
      }
    }
    if (move.direction === 'R') {
      for (let i = 0; i < move.steps; i++) {
        currentXPosition += 1
        result.add(xyToString(currentXPosition, currentYPosition))
      }
    }
    if (move.direction === 'L') {
      for (let i = 0; i < move.steps; i++) {
        currentXPosition -= 1
        result.add(xyToString(currentXPosition, currentYPosition))
      }
    }
  }
  return result
}

function algorithm1(s1, s2) {
  const A = getCoordinatesWithWires(s1)
  const B = getCoordinatesWithWires(s2)
  let best = Number.MAX_VALUE;
  A.forEach(a => {
    if (B.has(a)) {
      const split = a.split(',').map(s => Number(s))
      const temp = Math.abs(split[0]) + Math.abs(split[1])
      if (temp < best) {
        best = temp
      }
    }
  })
  return best
}

module.exports.algorithm1 = algorithm1
module.exports.parse = parse
