function StackWithMinOperation() {
  this.first = null
  this.N = 0
}

StackWithMinOperation.prototype.isEmpty = function() {
  return this.size() === 0
}

StackWithMinOperation.prototype.min = function () {
  if (this.isEmpty()) {
    throw new Error('Unsupported operation: can\'t get min when stack is empty')
  }
  return this.first.min
}

StackWithMinOperation.prototype.size = function() {
  return this.N
}

StackWithMinOperation.prototype.push = function(item) {
  const oldFirst = this.first;
  let newMin
  if (oldFirst === null) {
    newMin = item
  } else {
    newMin = Math.min(oldFirst.item, item)
  }
  this.first = {
    item: item,
    next: oldFirst,
    min: newMin,
  }
  this.N++
}

StackWithMinOperation.prototype.pop = function() {
  if (this.isEmpty())
    throw Error('StackWithMinOperation underflow')
  const item = this.first.item
  this.first = this.first.next
  this.N--
  return item
}

StackWithMinOperation.prototype.peek = function() {
  if (this.isEmpty())
    throw Error('StackWithMinOperation underflow')
  const item = this.first.item
  return item
}

module.exports.StackWithMinOperation = StackWithMinOperation
