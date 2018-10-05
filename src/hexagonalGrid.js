let Queue = require('./queue').Queue;

const VERTICAL = 'VERTICAL'
const HORIZONTAL = 'HORIZONTAL'
const DIAGONAL = 'DIAGONAL'
const NO = 'NO'
const YES = 'YES'
const isEmpty = (piece) => piece === '0'


function getTilesPossibleFromThePosition(a, b, x, row) {
  const tiles = new Set()
  if (row === 'a') {
    if (isEmpty(a[x]) && isEmpty(b[x]))
      tiles.add(VERTICAL)
    if (x < a.length && isEmpty(a[x]) && isEmpty(a[x + 1]))
      tiles.add(HORIZONTAL)
  } else if (row === 'b') {
    if (x < b.length && isEmpty(b[x]) && isEmpty(b[x + 1]))
      tiles.add(HORIZONTAL)
    if (x < a.length && isEmpty(b[x]) && isEmpty(a[x + 1]))
      tiles.add(DIAGONAL)
  }
  return tiles
}

function hexagonalGrid (a, b) {


  const queue = new Queue()
  queue.enqueue()
  // const nextSteps = [];
  // const aOpenPath = a.split().reduce((sum, curr) => curr === '0' ? sum + 1 : sum, 0)
  // const bOpenPath = b.split().reduce((sum, curr) => curr === '0' ? sum + 1 : sum, 0)
  //
  // const boardLength = a.length
  // for (let i=0; i<boardLength; i++){
  //   if (boardLength % 2 ))
  // if (isBlocked(a[i]) || isBlocked(b[i])) {
  //   return NO
  // }
}

module.exports.hexagonalGrid = hexagonalGrid
module.exports.getTilesPossibleFromThePosition = getTilesPossibleFromThePosition
module.exports.VERTICAL = VERTICAL
module.exports.HORIZONTAL = HORIZONTAL
module.exports.DIAGONAL = DIAGONAL

