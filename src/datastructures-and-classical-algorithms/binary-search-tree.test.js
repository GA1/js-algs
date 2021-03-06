const { BinarySerachTree } = require("./binary-search-tree");

describe('binary search tree', () => {

  const insert = (bst, toInsert) => {
    for (let i = 0; i < toInsert.length; i++) {
      bst.insert(toInsert[i])
    }
  }

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

  describe('delete', () => {
    it('can\'t delete when no elements', () => {
      try {
        const bst = new BinarySerachTree()
        bst.delete(7)
      } catch (e) {
        expect(e.message).toBe('Unsupported operation: cannot delete from an empty BST');
      }
    })

    it('deletes the only element', () => {
      const bst = new BinarySerachTree()
      bst.insert(7)
      bst.delete(7)
      expect(bst.size()).toEqual(0)
      expect(bst.height()).toEqual(0)
    })

    it('deletes 2 after inserting [2, 7]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      bst.insert(7)
      bst.delete(2)
      expect(bst.size()).toEqual(1)
      expect(bst.height()).toEqual(1)
      expect(bst.traverseInLevelOrder([7]))
    })

    it('deletes 10 after inserting [20, 15, 10]', () => {
      const bst = new BinarySerachTree()
      insert(bst, [20, 15, 10])
      bst.delete(10)
      expect(bst.size()).toEqual(2)
      expect(bst.height()).toEqual(2)
      expect(bst.traverseInLevelOrder([20, 15]))
    })

    it('deletes 15 after inserting [20, 15, 10]', () => {
      const bst = new BinarySerachTree()
      insert(bst, [20, 15, 10])
      bst.delete(15)
      expect(bst.size()).toEqual(2)
      expect(bst.height()).toEqual(2)
      expect(bst.traverseInLevelOrder([20, 10]))
    })

    it('deletes 15 after inserting [20, 15, 10]', () => {
      const bst = new BinarySerachTree()
      insert(bst, [20, 15, 10])
      bst.delete(20)
      expect(bst.size()).toEqual(2)
      expect(bst.height()).toEqual(2)
      expect(bst.traverseInLevelOrder([15, 10]))
    })

    it('deletes 20 after inserting [10, 15, 20]', () => {
      const bst = new BinarySerachTree()
      insert(bst, [10, 15, 20])
      bst.delete(10)
      expect(bst.size()).toEqual(2)
      expect(bst.height()).toEqual(2)
      expect(bst.traverseInLevelOrder([15, 20]))
    })

    it('deletes 20 after inserting [10, 15, 20]', () => {
      const bst = new BinarySerachTree()
      insert(bst, [10, 15, 20])
      bst.delete(15)
      expect(bst.size()).toEqual(2)
      expect(bst.height()).toEqual(2)
      expect(bst.traverseInLevelOrder([10, 20]))
    })

    it('deletes 20 after inserting [10, 15, 20]', () => {
      const bst = new BinarySerachTree()
      insert(bst, [10, 15, 20])
      bst.delete(20)
      expect(bst.size()).toEqual(2)
      expect(bst.height()).toEqual(2)
      expect(bst.traverseInLevelOrder([10, 15]))
    })


    it('deletes 10 after inserting [20, 10, 7, 15, 12]', () => {
      const bst = new BinarySerachTree()
      insert(bst, [20, 10, 7, 15, 12])
      bst.delete(10)
      expect(bst.size()).toEqual(4)
      expect(bst.height()).toEqual(3)
      expect(bst.traverseInLevelOrder([20, 12, 7, 15]))
    })

  })

  describe('deleteMin', () => {
    it('can\'t delete min when no elements', () => {
      try {
        const bst = new BinarySerachTree()
        bst.deleteMin()
      } catch (e) {
        expect(e.message).toBe('Unsupported operation: cannot delete min from an empty BST');
      }
    });

    it('deletes when 1 element', () => {
      const bst = new BinarySerachTree()
      bst.insert(7)
      bst.deleteMin()
      expect(bst.size()).toEqual(0)
      expect(bst.height()).toEqual(0)
    })

    it('deletes when [2, 7] elements', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      bst.insert(7)
      bst.deleteMin()
      expect(bst.size()).toEqual(1)
      expect(bst.traverseInLevelOrder()).toEqual([7])
    })

    it('deletes when [7, 2] elements', () => {
      const bst = new BinarySerachTree()
      bst.insert(7)
      bst.insert(2)
      bst.deleteMin()
      expect(bst.size()).toEqual(1)
      expect(bst.traverseInLevelOrder()).toEqual([7])
    })

    it('deletes when [2, 5, 7] elements', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      bst.insert(5)
      bst.insert(7)
      bst.deleteMin()
      expect(bst.size()).toEqual(2)
      expect(bst.traverseInLevelOrder()).toEqual([5, 7])
    })

  })


  describe('min', () => {
    it('pop min after creation', () => {
      const bst = new BinarySerachTree()
      expect(bst.min()).toEqual(null)
    })

    it('pop min after inserting [2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      expect(bst.min()).toEqual(2)
    })

    it('pop min after inserting [2, 5]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      bst.insert(5)
      expect(bst.min()).toEqual(2)
    })

    it('pop min after inserting [7, 5, 2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(7)
      bst.insert(5)
      bst.insert(2)
      expect(bst.min()).toEqual(2)
    })

    it('pop min after inserting [7, 13, 17, 21, 37, 5, 41, 5, 2]', () => {
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
    it('pop max after creation', () => {
      const bst = new BinarySerachTree()
      expect(bst.max()).toEqual(null)
    })

    it('pop max after inserting [2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      expect(bst.max()).toEqual(2)
    })

    it('pop max after inserting [2, 5]', () => {
      const bst = new BinarySerachTree()
      bst.insert(2)
      bst.insert(5)
      expect(bst.max()).toEqual(5)
    })

    it('pop max after inserting [7, 5, 2]', () => {
      const bst = new BinarySerachTree()
      bst.insert(7)
      bst.insert(5)
      bst.insert(2)
      expect(bst.max()).toEqual(7)
    })

    it('pop max after inserting [7, 13, 17, 21, 37, 5, 41, 5, 2]', () => {
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

      it('after adding 3, 2, 5', () => {
        const bst = new BinarySerachTree()
        bst.insert(3)
        bst.insert(2)
        bst.insert(5)
        expect(bst.traverseInOrder()).toEqual([2, 3, 5])
      })
    })

    describe('in preorder', () => {
      it('after creation', () => {
        const bst = new BinarySerachTree()
        expect(bst.traverseInPreorder()).toEqual([])
      })

      it('after adding 2', () => {
        const bst = new BinarySerachTree()
        bst.insert(2)
        expect(bst.traverseInPreorder()).toEqual([2])
      })

      it('after adding 2, 5', () => {
        const bst = new BinarySerachTree()
        bst.insert(2)
        bst.insert(5)
        expect(bst.traverseInPreorder()).toEqual([2, 5])
      })

      it('after adding 5, 3, 1, 2, 9', () => {
        const bst = new BinarySerachTree()
        bst.insert(5)
        bst.insert(3)
        bst.insert(1)
        bst.insert(2)
        bst.insert(9)
        expect(bst.traverseInPreorder()).toEqual([5, 3, 1, 2, 9])
      })
    })

    describe('in postorder', () => {
      it('after creation', () => {
        const bst = new BinarySerachTree()
        expect(bst.traverseInPostorder()).toEqual([])
      })

      it('after adding 2', () => {
        const bst = new BinarySerachTree()
        bst.insert(2)
        expect(bst.traverseInPostorder()).toEqual([2])
      })

      it('after adding 2, 5', () => {
        const bst = new BinarySerachTree()
        bst.insert(2)
        bst.insert(5)
        expect(bst.traverseInPostorder()).toEqual([5, 2])
      })

      it('after adding 5, 3, 1, 2, 9', () => {
        const bst = new BinarySerachTree()
        bst.insert(5)
        bst.insert(3)
        bst.insert(1)
        bst.insert(2)
        bst.insert(9)
        expect(bst.traverseInPostorder()).toEqual([2, 1, 3, 9, 5])
      })
    })

    describe('level order', () => {
      it('after creation', () => {
        const bst = new BinarySerachTree()
        expect(bst.traverseInLevelOrder()).toEqual([])
      })

      it('after adding 2', () => {
        const bst = new BinarySerachTree()
        bst.insert(2)
        expect(bst.traverseInLevelOrder()).toEqual([2])
      })

      it('after adding 5, 2', () => {
        const bst = new BinarySerachTree()
        bst.insert(5)
        bst.insert(2)
        expect(bst.traverseInLevelOrder()).toEqual([5, 2])
      })

      it('after adding 5, 3, 1, 2, 9', () => {
        const bst = new BinarySerachTree()
        bst.insert(5)
        bst.insert(3)
        bst.insert(1)
        bst.insert(0)
        bst.insert(2)
        bst.insert(9)
        expect(bst.traverseInLevelOrder()).toEqual([5, 3, 9, 1, 0, 2])
      })
    })

    describe('isBalanced', () => {
      it('after creation', () => {
        const bst = new BinarySerachTree()
        expect(bst.isBalanced()).toEqual(true)
      })

      it('after adding 2', () => {
        const bst = new BinarySerachTree()
        bst.insert(2)
        expect(bst.isBalanced()).toEqual(true)
      })

      it('after adding 7, 5, 2', () => {
        const bst = new BinarySerachTree()
        insert(bst, [7, 5, 2])
        expect(bst.isBalanced()).toEqual(false)
      })

      it('after adding 2, 1, 5, 7', () => {
        const bst = new BinarySerachTree()
        insert(bst, [2, 1, 5, 7])
        expect(bst.isBalanced()).toEqual(true)
      })

      it('after adding 10, 5, 15, 2, 6, 12, 17', () => {
        const bst = new BinarySerachTree()
        insert(bst, [10, 5, 15, 2, 6, 12, 17])
        expect(bst.isBalanced()).toEqual(true)
      })
    })
  })
})
