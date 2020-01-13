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

    it('size after inserting [7, 13, 17, 21, 37, 5, 41, 5, 2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(7)
      bst.insert(13)
      bst.insert(17)
      bst.insert(21)
      bst.insert(37)
      bst.insert(5)
      bst.insert(41)
      bst.insert(5)
      bst.insert(2)
      expect(bst.size()).toEqual(9)
    })
  })

  describe('min', () => {
    it('get min after creation', () => {
      const bst = new BinarySerachTree()
      expect(bst.min()).toEqual(null)
    })

    it('get min after inserting [2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      expect(bst.min()).toEqual(2)
    })

    it('get min after inserting [2, 5]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      bst.insert(5)
      expect(bst.min()).toEqual(2)
    })

    it('get min after inserting [7, 5, 2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(7)
      bst.insert(5)
      bst.insert(2)
      expect(bst.min()).toEqual(2)
    })

    it('get min after inserting [7, 13, 17, 21, 37, 5, 41, 5, 2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(7)
      bst.insert(13)
      bst.insert(17)
      bst.insert(21)
      bst.insert(37)
      bst.insert(5)
      bst.insert(41)
      bst.insert(5)
      bst.insert(2)
      expect(bst.min()).toEqual(2)
    })
  })

  describe('max', () => {
    it('get max after creation', () => {
      const bst = new BinarySerachTree()
      expect(bst.max()).toEqual(null)
    })

    it('get max after inserting [2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      expect(bst.max()).toEqual(2)
    })

    it('get max after inserting [2, 5]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      bst.insert(5)
      expect(bst.max()).toEqual(5)
    })

    it('get max after inserting [7, 5, 2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(7)
      bst.insert(5)
      bst.insert(2)
      expect(bst.max()).toEqual(7)
    })

    it('get max after inserting [7, 13, 17, 21, 37, 5, 41, 5, 2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(7)
      bst.insert(13)
      bst.insert(17)
      bst.insert(21)
      bst.insert(37)
      bst.insert(5)
      bst.insert(41)
      bst.insert(5)
      bst.insert(2)
      expect(bst.max()).toEqual(41)
    })
  })

  describe('height', () => {
    it('height after creation', () => {
      const bst = new BinarySerachTree()
      expect(bst.height()).toEqual(0)
    })

    it('height after inserting [2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      expect(bst.height()).toEqual(1)
    })

    it('height after inserting [2, 5]', () => {
      const bst = new BinarySerachTree()
      bst.insert(5)
      bst.insert(2)
      expect(bst.height()).toEqual(2)
    })

    it('height after inserting [5, 7, 2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(5)
      bst.insert(7)
      bst.insert(2)
      expect(bst.height()).toEqual(2)
    })

    it('height after inserting [2, 5, 7]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      bst.insert(5)
      bst.insert(7)
      expect(bst.height()).toEqual(3)
    })

    it('height after inserting [7, 13, 17, 21, 37, 5, 41, 5, 2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(21)
      bst.insert(17)
      bst.insert(7)
      bst.insert(13)
      bst.insert(37)
      bst.insert(5)
      bst.insert(41)
      bst.insert(5)
      bst.insert(2)
      expect(bst.height()).toEqual(5)
    })
  })

  describe('traverse', () => {
    describe('in order', () => {
      it('after creation', () => {
        const bst = new BinarySerachTree()
        expect(bst.traverseInOrder()).toEqual([])
      })

      it('after adding 2', () => {
        const bst = new BinarySerachTree()
        bst.insert(2)
        expect(bst.traverseInOrder()).toEqual([2])
      })

      it('after adding 2, 5', () => {
        const bst = new BinarySerachTree()
        bst.insert(2)
        bst.insert(5)
        expect(bst.traverseInOrder()).toEqual([2, 5])
      })

      it('after adding 2, 3, 5', () => {
        const bst = new BinarySerachTree()
        bst.insert(3)
        bst.insert(2)
        bst.insert(5)
        expect(bst.traverseInOrder()).toEqual([2, 3, 5])
      })
    })
  })

})
