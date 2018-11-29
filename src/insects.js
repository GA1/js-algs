// 1 - yellow ass
// 2 - yellow head
// 3 - criket's ass
// 4 - criket's head
// 5 - ladybird's ass
// 6 - ladybird's head
// 7 - spider's ass
// 8 - spider's head

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

function solver() {
  // for ()
  console.log('STARTING INSECTS BLOCK SOLVER')
}


solver([])

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

module.exports.InsectBlock = InsectBlock