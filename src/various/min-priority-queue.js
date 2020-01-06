const {PriorityQueue} = require("./priority-queue")

class MinPriorityQueue {
  constructor() {
    this._priorityQueue = new PriorityQueue((a, b) => a - b)
  }

  size() {
    return this._priorityQueue.size()
  }

  delMin() {
    return this._priorityQueue.delMax()
  }

  getMin() {
    return this._priorityQueue.getMax()
  }

  insert(item) {
    this._priorityQueue.insert(item)
  }

  isEmpty() {
    return this._priorityQueue.isEmpty()
  }
}

module.exports.MinPriorityQueue = MinPriorityQueue
