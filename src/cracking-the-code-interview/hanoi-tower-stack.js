function HanoiTowerStack() {
  this.first = null
  this.N = 0
}

HanoiTowerStack.prototype.isEmpty = function() {
  return this.size() === 0
}


HanoiTowerStack.prototype.size = function() {
  return this.N
}

HanoiTowerStack.prototype.push = function(item) {
  if (!this.isEmpty() && this.peek() < item) {
    throw new Error('Incorrect arguments: the element to insert is bigger than the last pushed one')
  }
  const oldFirst = this.first;
  this.first = {
    item: item,
    next: oldFirst,
  }
  this.N++
}

HanoiTowerStack.prototype.pop = function() {
  if (this.isEmpty())
    throw Error('HanoiTowerStack underflow')
  const item = this.first.item
  this.first = this.first.next
  this.N--
  return item
}

HanoiTowerStack.prototype.peek = function() {
  if (this.isEmpty())
    throw Error('HanoiTowerStack underflow')
  const item = this.first.item
  return item
}

module.exports.HanoiTowerStack = HanoiTowerStack
