class Stack {
  constructor() {
    this.first = null
    this.N = 0
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.N
  }

  push(item) {
    const oldFirst = this.first;
    this.first = {
      item: item,
      next: oldFirst,
    }
    this.N++
  }

  pop() {
    if (this.isEmpty())
      throw Error('Stack underflow')
    const item = this.first.item
    this.first = this.first.next
    this.N--
    return item
  }

  peek() {
    if (this.isEmpty())
      throw Error('Stack underflow')
    const item = this.first.item
    return item
  }
}

module.exports.Stack = Stack
