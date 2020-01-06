const { MinPriorityQueue } = require("./min-priority-queue")
const { MaxPriorityQueue } = require("./max-priority-queue")

class MedianCalculator {
  constructor() {
    this._upperHalf = new MinPriorityQueue()
    this._lowerHalf = new MaxPriorityQueue()
  }

  insert(n) {
    if (this._upperHalf.isEmpty() && this._lowerHalf.isEmpty()) {
      this._lowerHalf.insert(n)
    } else if (this._lowerHalf.size() > this._upperHalf.size()) {
      if (n < this._lowerHalf.getMax()) {
        this._upperHalf.insert(this._lowerHalf.delMax())
        this._lowerHalf.insert(n)
      } else {
        this._upperHalf.insert(n)
      }
    } else {
      if (this._upperHalf.getMin() < n) {
        this._lowerHalf.insert(this._upperHalf.delMin())
        this._upperHalf.insert(n)
      } else {
        this._lowerHalf.insert(n)
      }
    }
  }

  getMedian() {
    if (this._upperHalf.size() === this._lowerHalf.size()) {
      return (this._lowerHalf.getMax() + this._upperHalf.getMin()) / 2
    }
    return this._lowerHalf.getMax()
  }
}

module.exports.MedianCalculator = MedianCalculator

