const Queue = require('./queue').Queue;

function InsectBlock(top, right, bottom, left) {
  this.top = top
  this.right = right
  this.bottom = bottom
  this.left = left
}

InsectBlock.prototype.getTop = function() {
  return this.top
}

InsectBlock.prototype.getRight = function() {
  return this.right
}

InsectBlock.prototype.getBottom = function() {
  return this.bottom
}

InsectBlock.prototype.getLeft = function() {
  return this.left
}

InsectBlock.prototype.turn90degreesClockwise = function() {
  return new InsectBlock(this.getLeft(), this.getTop(), this.getRight(), this.getBottom())
}

InsectBlock.prototype.equals = function(that) {
  return this.top === that.getTop() && this.right === that.getRight() && this.bottom === that.getBottom() && this.left === that.getLeft()
}

const YELLOW_BUTT = 1
const YELLOW_HEAD = 2
const CRICKET_BUTT = 3
const CRICKET_HEAD = 4
const LADYBIRD_BUTT = 5
const LADYBIRD_HEAD = 6
const SPIDER_BUTT = 7
const SPIDER_HEAD = 8


const input = [
  new InsectBlock(YELLOW_HEAD, YELLOW_BUTT, CRICKET_BUTT, LADYBIRD_HEAD),
  new InsectBlock(YELLOW_HEAD, SPIDER_BUTT, LADYBIRD_HEAD, CRICKET_HEAD),
  new InsectBlock(CRICKET_HEAD, SPIDER_HEAD, LADYBIRD_HEAD, LADYBIRD_BUTT),
  new InsectBlock(LADYBIRD_BUTT, SPIDER_HEAD, YELLOW_HEAD, CRICKET_BUTT),
  new InsectBlock(CRICKET_BUTT, SPIDER_BUTT, YELLOW_HEAD, SPIDER_HEAD),
  new InsectBlock(LADYBIRD_BUTT, CRICKET_BUTT, YELLOW_HEAD, SPIDER_HEAD),
  new InsectBlock(YELLOW_BUTT, CRICKET_HEAD, LADYBIRD_HEAD, SPIDER_BUTT),
  new InsectBlock(YELLOW_HEAD, SPIDER_HEAD, LADYBIRD_HEAD, CRICKET_BUTT),
  new InsectBlock(YELLOW_BUTT, LADYBIRD_BUTT, CRICKET_BUTT, SPIDER_BUTT),
]

const N = input.length

function constructsAnInsect(insectPart1, insectPart2) {
  return (insectPart1 === YELLOW_BUTT && insectPart2 === YELLOW_HEAD) || (insectPart1 === YELLOW_HEAD && insectPart2 === YELLOW_BUTT) ||
    (insectPart1 === CRICKET_BUTT && insectPart2 === CRICKET_HEAD) || (insectPart1 === CRICKET_HEAD && insectPart2 === CRICKET_BUTT) ||
    (insectPart1 === LADYBIRD_BUTT && insectPart2 === LADYBIRD_HEAD) || (insectPart1 === LADYBIRD_HEAD && insectPart2 === LADYBIRD_BUTT) ||
    (insectPart1 === SPIDER_BUTT && insectPart2 === SPIDER_HEAD) || (insectPart1 === SPIDER_HEAD && insectPart2 === SPIDER_BUTT)
}

function isSolved(board) {

  const ib1 = board[0]
  const ib2 = board[1]
  const ib3 = board[2]
  const ib4 = board[3]
  const ib5 = board[4]
  const ib6 = board[5]
  const ib7 = board[6]
  const ib8 = board[7]
  const ib9 = board[8]
  if (!ib1 || !ib2 || !ib3 || !ib4|| !ib5 || !ib6 || !ib7 || !ib8 || !ib9) {
    return false
  }
  return constructsAnInsect(ib1.getRight(), ib2.getLeft()) &&
    constructsAnInsect(ib2.getRight(), ib3.getLeft()) &&
    constructsAnInsect(ib1.getBottom(), ib4.getTop()) &&
    constructsAnInsect(ib2.getBottom(), ib5.getTop()) &&
    constructsAnInsect(ib3.getBottom(), ib6.getTop()) &&
    constructsAnInsect(ib4.getRight(), ib5.getLeft()) &&
    constructsAnInsect(ib5.getRight(), ib6.getLeft()) &&
    constructsAnInsect(ib4.getBottom(), ib7.getTop()) &&
    constructsAnInsect(ib5.getBottom(), ib8.getTop()) &&
    constructsAnInsect(ib6.getBottom(), ib9.getTop()) &&
    constructsAnInsect(ib7.getRight(), ib8.getLeft()) &&
    constructsAnInsect(ib8.getRight(), ib9.getLeft())
}


function solve() {
  function getAllRotations(block) {
    const block90 = block.turn90degreesClockwise()
    const block180 = block90.turn90degreesClockwise()
    const block270 = block180.turn90degreesClockwise()
    return [block, block90, block180, block270]
  }

  function initializeQueueWithFirstBlockAndTheirRotations() {
    const queue = new Queue()
    for (let i = 0; i < N; i++) {
      const blockRotations = getAllRotations(input[i])
      blockRotations.forEach(b => {
        queue.enqueue({indexes: new Set([i]), blocks: [b]})
      })
    }
    return queue
  };

  function wasLastAdditionCorrect(blocks) {
    if (blocks.length === 1) {
      return true
    } else if (blocks.length === 2) {
      return constructsAnInsect(blocks[0].getRight(), blocks[1].getLeft())
    } else if (blocks.length === 3) {
      return constructsAnInsect(blocks[1].getRight(), blocks[2].getLeft())
    } else if (blocks.length === 4) {
      return constructsAnInsect(blocks[0].getBottom(), blocks[3].getTop())
    } else if (blocks.length === 5) {
      return constructsAnInsect(blocks[1].getBottom(), blocks[4].getTop()) &&
        constructsAnInsect(blocks[3].getRight(), blocks[4].getLeft())
    } else if (blocks.length === 6) {
      return constructsAnInsect(blocks[2].getBottom(), blocks[5].getTop()) &&
        constructsAnInsect(blocks[4].getRight(), blocks[5].getLeft())
    } else if (blocks.length === 7) {
      return constructsAnInsect(blocks[3].getBottom(), blocks[6].getTop())
    } else if (blocks.length === 8) {
      return constructsAnInsect(blocks[4].getBottom(), blocks[7].getTop()) &&
        constructsAnInsect(blocks[6].getRight(), blocks[7].getLeft())
    }else if (blocks.length === 9) {
      return constructsAnInsect(blocks[5].getBottom(), blocks[8].getTop()) &&
        constructsAnInsect(blocks[7].getRight(), blocks[8].getLeft())
    }
  }

  const solutions = []

  const queue = initializeQueueWithFirstBlockAndTheirRotations()
  while (!queue.isEmpty()) {
    const q = queue.dequeue()
    if (isSolved(q.blocks)) {
      solutions.push(q.blocks)
    } else {
      if (wasLastAdditionCorrect(q.blocks)) {
        for (let i = 0; i < N; i++) {
          if (!q.indexes.has(i)) {
            const newIndexes = new Set(q.indexes)
            newIndexes.add(i)
            const blockRotations = getAllRotations(input[i])
            blockRotations.forEach(b => {
              const newBlocks = q.blocks.slice()
              newBlocks.push(b)
              queue.enqueue({indexes: newIndexes, blocks: newBlocks})
            })
          }
        }
      }
    }
  }
  return solutions
}

console.log('STARTING INSECTS BLOCK SOLVER')
if (!module.parent) {
  const solutions = solve()
  console.log(solutions)
}
console.log('END INSECTS BLOCK SOLVER')


module.exports.InsectBlock = InsectBlock
module.exports.isSolved = isSolved
