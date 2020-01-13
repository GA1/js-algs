
class BinarySerachTree {
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
    if (this.root)
      return this.root.size
    return 0
  }

  min() {
    const minRecursive = (node, min) => {
      if (!node) {
        return min
      } else {
        if (node.left) {
          return minRecursive(node.left, node.value)
        } else {
          return node.value
        }
      }
    }
    return minRecursive(this.root, null)
  }

  max() {
    const minRecursive = (node, min) => {
      if (!node) {
        return min
      } else {
        if (node.right) {
          return minRecursive(node.right, node.value)
        } else {
          return node.value
        }
      }
    }
    return minRecursive(this.root, null)
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
        if (node.left) {
          traverseInOrderRecursive(traversed, node.left)
        }
        traversed.push(node.value)
        if (node.right) {
          traverseInOrderRecursive(traversed, node.right)
        }
      }
      return traversed
    }
    return traverseInOrderRecursive([], this.root)
  }

  traverseInPreorder() {
    const traverseInOrderRecursive = (traversed, node) => {
      if (node) {
        traversed.push(node.value)
        if (node.left) {
          traverseInOrderRecursive(traversed, node.left)
        }
        if (node.right) {
          traverseInOrderRecursive(traversed, node.right)
        }
      }
      return traversed
    }
    return traverseInOrderRecursive([], this.root)
  }
}


module.exports.BinarySerachTree = BinarySerachTree
