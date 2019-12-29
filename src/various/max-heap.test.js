const {MaxHeap} = require('./max-heap');

describe('MaxHeap', () => {

  describe('size', () => {
    it("empty", () => {
      const mh = new MaxHeap()
      expect(mh.size()).toEqual(0);
    })

    it("after adding 2 elements", () => {
      const mh = new MaxHeap()
      mh.insert(5)
      mh.insert(7)
      expect(mh.size()).toEqual(2);
    })
    it("after adding 3 elements and removing one element", () => {
      const mh = new MaxHeap()
      mh.insert(5)
      mh.insert(7)
      mh.insert(11)
      mh.delMax()
      expect(mh.size()).toEqual(2);
    })
  })
  describe('delMax', () => {
    it("after adding 2 elements", () => {
      const mh = new MaxHeap()
      mh.insert(5)
      mh.insert(7)
      expect(mh.delMax()).toEqual(7);
    })
  })
})
