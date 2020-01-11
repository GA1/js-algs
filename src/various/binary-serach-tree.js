
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
}


module.exports.BinarySerachTree = BinarySerachTree