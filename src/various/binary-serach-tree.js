const { Queue } = require('./queue')


class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(e) {
    const insertRecursive = (e, node) => {
      if (!node) {
        return {
          left: null,
          right: null,
          value: e,
          size: 1,
        }
      } else {
        if (node.value <= e) {
          node.right = insertRecursive(e, node.right)
        } else if (e < node.value) {
          node.left = insertRecursive(e, node.left)
        }
        node.size++
        return node
      }
    }
    this.root = insertRecursive(e, this.root)
  }

  size() {
    return this._size(this.root)
  }

  _size(node) {
    if (node)
      return node.size
    return 0
  }

  _minRecursive(node, min) {
    if (!node) {
      return min
    } else {
      return this._minRecursive(node.left, node.value)
    }
  }

  min() {
    return this._minRecursive(this.root, null)
  }


  deleteMin() {
    if (this.isEmpty()) {
      throw new Error('Unsupported operation: cannot delete min from an empty BST')
    }
    const deleteMinRecursive = (node) => {
      if (!node.left) {
        return node.right
      } else {
        node.left = deleteMinRecursive(node.left)
        node.size = this._size(node.left) + 1 + this._size(node.right)
        return node
      }
    }
    this.root = deleteMinRecursive(this.root)
  }

  isEmpty() {
    return this.size() === 0;
  }

  delete(elem) {
    if (this.isEmpty()) {
      return new Error('Unsupported operation: cannot delete from an empty BST')
    }
    const deleteRecursive = (node, elem) => {
      if (!node) {
        return null
      }
      if (node.value === elem) {
        if (!node.right) {
          return node.left
        }
        if (!node.left) {
          return node.right
        }
        const minOnTheRight = this._minRecursive(node.right)
        node = this.deleteMin()
        return {
          left: node.left,
          right: node.right,
          value: minOnTheRight,
          size: this._size(node.left) + 1 + this._size(node.right),
        }
      } else if (elem < node.value) {
        node.left = deleteRecursive(node.left, elem)
      } else {
        node.right = deleteRecursive(node.right, elem)
      }
      return node
    }
    this.root = deleteRecursive(this.root, elem)
  }

  max() {
    const maxRecursive = (node, min) => {
      if (!node) {
        return min
      } else {
        return maxRecursive(node.right, node.value)
      }
    }
    return maxRecursive(this.root, null)
  }

  height() {
    const heightRecursive = (node) => {
      if (!node) {
        return 0
      } else {
        return 1 + Math.max(heightRecursive(node.left), heightRecursive(node.right))
      }
    }
    return heightRecursive(this.root)
  }

  traverseInOrder() {
    const traverseInOrderRecursive = (traversed, node) => {
      if (node) {
        traverseInOrderRecursive(traversed, node.left)
        traversed.push(node.value)
        traverseInOrderRecursive(traversed, node.right)
      }
      return traversed
    }
    return traverseInOrderRecursive([], this.root)
  }

  traverseInPreorder() {
    const traverseInOrderRecursive = (traversed, node) => {
      if (node) {
        traversed.push(node.value)
        traverseInOrderRecursive(traversed, node.left)
        traverseInOrderRecursive(traversed, node.right)
      }
      return traversed
    }
    return traverseInOrderRecursive([], this.root)
  }

  traverseInPostorder() {
    const traverseInOrderRecursive = (traversed, node) => {
      if (node) {
        traverseInOrderRecursive(traversed, node.left)
        traverseInOrderRecursive(traversed, node.right)
        traversed.push(node.value)
      }
      return traversed
    }
    return traverseInOrderRecursive([], this.root)
  }

  traverseInLevelOrder() {
    if (!this.root) {
      return []
    }
    const traversed = []
    const queue = new Queue()
    queue.enqueue(this.root)
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      traversed.push(node.value)
      if (node.left) {
        queue.enqueue(node.left)
      }
      if (node.right) {
        queue.enqueue(node.right)
      }
    }
    return traversed;
  }
}


module.exports.BinarySerachTree = BinarySearchTree
