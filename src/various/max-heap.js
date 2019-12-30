class MaxHeap {
  constructor() {
    this._items = Array(100)
    this._size = 0
  }

  size() {
    return this._size
  }

  _sink() {
    const items = this._items
    let i = 0
    while (2*i + 1 < this.size()) {
      const leftChildIndex = 2*i + 1
      const rightChildIndex = 2*i + 2
      let toSwap = leftChildIndex
      if (rightChildIndex < this.size() && items[leftChildIndex] < items[rightChildIndex]) {
        toSwap = rightChildIndex
      }
      if (!(items[i] < items[toSwap])) {
        break
      } else {
        this._swap(i, toSwap)
      }
      i = toSwap
    }
  }

  _swim() {
    let i = this.size() - 1
    while (0 < i) {
      const parentIndex = Math.floor((i - 1) / 2)
      if (this._items[parentIndex] < this._items[i]) {
        this._swap(parentIndex, i)
      }
      i = parentIndex
    }
  }

  _swap(i, j) {
    const temp = this._items[i]
    this._items[i] = this._items[j]
    this._items[j] = temp
  }

  delMax() {
    const result = this._items[0]
    this._items[0] = this._items[this.size() - 1]
    this._items[this.size() - 1] = undefined
    this._size = this._size - 1
    this._sink()
    return result
  }

  getMax() {
    return this._items[0]
  }

  insert(item) {
    this._items[this.size()] = item
    this._size = this._size + 1
    this._swim()
  }

  isEmpty() {
    return this.size() === 0
  }
}

module.exports.MaxHeap = MaxHeap
