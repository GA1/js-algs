const {PriorityQueue} = require("./priority-queue")

class MaxPriorityQueue {
  constructor() {
    this._priorityQueue = new PriorityQueue((a, b) => b - a)
  }

  size() {
    return this._priorityQueue.size()
  }

  delMax() {
    return this._priorityQueue.delMax()
  }

  getMax() {
    return this._priorityQueue.getMax()
  }

  insert(item) {
    this._priorityQueue.insert(item)
  }

  isEmpty() {
    return this._priorityQueue.isEmpty()
  }
}

module.exports.MaxPriorityQueue = MaxPriorityQueue
