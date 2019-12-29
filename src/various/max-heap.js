class MaxHeap {
  constructor() {
    this.items = Array(100)
    this.size = 0
  }

  _sink() {
    const items = this.items
    let i = 1
    while (i < this.size - 1) {
      const leftChildIndex = 2*i
      const rightChildIndex = 2*i + 1
      if (items[i] < items[rightChildIndex]) {
        this._swap(i, rightChildIndex)
        i = rightChildIndex
      } else if (items[i] < items[leftChildIndex]) {
        this._swap(i, leftChildIndex)
        i = leftChildIndex
      } else {
        break;
      }
    }

  }

  _swim() {
    let i = this.size()
    while (0 < i) {
      const parentIndex = Math.floor(i / 2)
      if (this.items[parentIndex] < this.items[i]) {
        this._swap(parentIndex, i)
      }
    }
  }

  _swap(i, j) {
    const temp = this.items[i]
    this.items[i] = this.items[j]
    this.items[j] = temp
  }

  delMax() {
    this._swap(0, this.size() - 1)
    this.swim()
    this.size = this.size - 1
  }

  insert() {
    this.size = this.size + 1
  }

  size() {
    return this.size
  }

  isEmpty() {
    return this.size() === 0
  }
}

module.exports.MaxHeap = MaxHeap
