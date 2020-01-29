
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.N = 0
    this.iterators = []
  }

  size() {
    return this.N
  }

  _isEmpty() {
    return this.size() === 0;
  }

  get(index) {
    if (this.size() === 0) {
      throw new Error('Unsupported Operation: can\'t pop any element if the list is empty')
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
      this.tail = newTail
      this.head.prev = this.tail
    }
    this.N++
    this.iterators.forEach(it => it.notifyAboutModification())
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

  iterator() {
    if (this._isEmpty()) {
      throw new Error('Unsupported operation: can\'t create iterator from an empty linked list')
    }
    const result = new Iterator(this.head);
    this.iterators.push(result)
    return result
  }

  delete(index) {
    if (this._isEmpty()) {
      throw new Error('Unsupported Operation: can\'t delete elements from an empty list')
    }
    if (this.size() <= index) {
      throw new Error(`Unsupported Operation: element with the index: ${index} can\'t be deleted because it\'s bigger than the size of the list`)
    }
    let i = 0
    let temp = this.head
    while (i < index) {
      temp = temp.next
      i++
    }
    temp.prev.next = temp.next
    temp.next.prev = temp.prev
    this.N--
  }
}

class Iterator {
  constructor(head) {
    this.current = head
    this.hasListBeenModified = false
    this.modificationExceptionMessage = 'Unsupported operation: the list has been modified since the creation of the iterator';
  }

  notifyAboutModification() {
    this.hasListBeenModified = true
  }

  isUpToDate() {
    return !this.hasListBeenModified
  }

  getCurrent() {
    if (!this.isUpToDate()) {
      throw new Error(this.modificationExceptionMessage)
    }
    return this.current.value
  }

  goPrev() {
    if (!this.isUpToDate()) {
      throw new Error(this.modificationExceptionMessage)
    }
    this.current = this.current.prev
  }

  goNext() {
    if (!this.isUpToDate()) {
      throw new Error(this.modificationExceptionMessage)
    }
    this.current = this.current.next
  }
}

module.exports.LinkedList = LinkedList
