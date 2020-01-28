function Stack() {
  this.first = null
  this.N = 0
}

Stack.prototype.isEmpty = function() {
  return this.size() === 0
}


Stack.prototype.size = function() {
  return this.N
}

Stack.prototype.push = function(item) {
  const oldFirst = this.first;
  this.first = {
    item: item,
    next: oldFirst,
  }
  this.N++
}

Stack.prototype.pop = function() {
  if (this.isEmpty())
    throw Error('Stack underflow')
  const item = this.first.item
  this.first = this.first.next
  this.N--
  return item
}

Stack.prototype.peek = function() {
  if (this.isEmpty())
    throw Error('Stack underflow')
  const item = this.first.item
  return item
}

module.exports.Stack = Stack
