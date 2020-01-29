class SimpleStack {
  constructor() {
    this.first = null
    this.size = 0
  }

  push(item) {
    const oldFirst = this.first;
    this.first = {
      item: item,
      next: oldFirst,
    }
    this.size++
  }

  pop() {
    if (this.size === 0)
      throw Error('Stack underflow')
    const item = this.first.item
    this.first = this.first.next
    this.size--
    return item
  }
}

module.exports.SimpleStack = SimpleStack
