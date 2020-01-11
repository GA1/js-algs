const { BinarySerachTree } = require("./binary-serach-tree");

describe('binary search tree', () => {
  describe('size', () => {
    it('size before inserting', () => {
      const bst = new BinarySerachTree()
      expect(bst.size()).toEqual(0)
    })

    it('size after inserting [2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      expect(bst.size()).toEqual(1)
    })

    it('size after inserting [2, 5]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      bst.insert(5)
      expect(bst.size()).toEqual(2)
    })

    it('size after inserting [5, 2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(5)
      bst.insert(2)
      expect(bst.size()).toEqual(2)
    })

    it('size after inserting [5, 2, 7]', () => {
      const bst = new BinarySerachTree()
      bst.insert(5)
      bst.insert(2)
      bst.insert(7)
      expect(bst.size()).toEqual(3)
    })

    it('size after inserting [2, 5, 7, 13]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      bst.insert(5)
      bst.insert(7)
      bst.insert(13)
      expect(bst.size()).toEqual(4)
    })
  })
})
