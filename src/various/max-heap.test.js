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
    it("after adding 5, 7 elements", () => {
      const mh = new MaxHeap()
      mh.insert(5)
      mh.insert(7)
      expect(mh.delMax()).toEqual(7);
    })

    it("after adding 7, 5 elements", () => {
      const mh = new MaxHeap()
      mh.insert(5)
      mh.insert(7)
      expect(mh.delMax()).toEqual(7);
    })

    it("after adding 20, 16, 18, 14, 8, 15, 1, 5, 9, 7, 19 elements", () => {
      const mh = new MaxHeap()
      mh.insert(20)
      mh.insert(16)
      mh.insert(18)
      mh.insert(14)
      mh.insert(8)
      mh.insert(15)
      mh.insert(1)
      mh.insert(5)
      mh.insert(9)
      mh.insert(7)
      mh.insert(19)
      expect(mh.delMax()).toEqual(20);
      expect(mh.delMax()).toEqual(19);
      expect(mh.delMax()).toEqual(18);
    })
  })

  describe('getMax', () => {
    it("after adding 7, 5 elements", () => {
      const mh = new MaxHeap()
      mh.insert(7)
      mh.insert(5)
      expect(mh.getMax()).toEqual(7);
      expect(mh.size()).toEqual(1);
    })
  })
})
