class SimpleStack {
  constructor() {
    this.first = null
  }

  push(item) {
    const oldFirst = this.first;
    this.first = {
      item: item,
      next: oldFirst,
    }
  }

  pop() {
    if (!this.first)
      throw Error('Stack underflow')
    const item = this.first.item
    this.first = this.first.next
    return item
  }
}

module.exports.SimpleStack = SimpleStack
