
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.N = 0
  }

  size() {
    return this.N
  }

  _isEmpty() {
    return this.size() === 0;
  }

  get(index) {
    if (this.size() === 0) {
      throw new Error('Unsupported Operation: can\'t get any element if the list is empty')
    }
    if (this.size() <= index || this.size() < Math.abs(index)) {
      throw new Error('Unsupported Operation: index is too big, it\'s absolute value can\'t be bigger than the size of the list')
    }
    if (0 <= index) {
      let i = 0
      let tempNode = this.head
      while (i < index) {
        tempNode = tempNode.next
        i++
      }
      return tempNode.value
    } else {
      let i = 0
      let tempNode = this.tail
      while (i < Math.abs(index) - 1) {
        tempNode = tempNode.prev
        i++
      }
      return tempNode.value
    }
  }

  append(v) {
    if (this._isEmpty()) {
      const firstNode = {
        prev: null,
        next: null,
        value: v,
      };
      this.head = firstNode
      this.tail = firstNode
      this.head.prev = this.tail
      this.tail.next = this.head
    } else {
      const oldTail = this.tail
      const newTail = {
        prev: oldTail,
        next: this.head,
        value: v,
      };
      oldTail.next = newTail
      this.head.prev = this.tail
      this.tail = newTail
    }
    this.N++
  }

  traverse() {
    if (this._isEmpty()) {
      return []
    }
    const result = []
    let temp = this.head
    let i = 0
    while (i < this.size()) {
      result.push(temp.value)
      temp = temp.next
      i++
    }
    return result
  }
}

module.exports.LinkedList = LinkedList
