const {Stack} = require("../datastructures-and-classical-algorithms/stack")

// Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
class QueueImplementedWithTwoStacks {
  constructor() {
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  }

  enqueue(item) {
    this.stack1.push(item)
  }

  size() {
    return this.stack1.size() + this.stack2.size()
  }

  dequeue() {
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      throw new Error('Unsupported operation: the queue is empty')
    }
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.pop()
  }
}

module.exports.QueueImplementedWithTwoStacks = QueueImplementedWithTwoStacks
