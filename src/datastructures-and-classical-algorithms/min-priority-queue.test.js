const {MinPriorityQueue} = require('./min-priority-queue');

describe('MinPriorityQueue', () => {

  describe('size', () => {
    it("empty", () => {
      const mh = new MinPriorityQueue()
      expect(mh.size()).toEqual(0);
    })

    it("after adding 2 elements", () => {
      const mh = new MinPriorityQueue()
      mh.insert(5)
      mh.insert(7)
      expect(mh.size()).toEqual(2);
    })
    it("after adding 3 elements and removing one element", () => {
      const mh = new MinPriorityQueue()
      mh.insert(5)
      mh.insert(7)
      mh.insert(11)
      mh.delMin()
      expect(mh.size()).toEqual(2);
    })
  })

  describe('delMin', () => {
    it("after adding 5, 7 elements", () => {
      const mh = new MinPriorityQueue()
      mh.insert(5)
      mh.insert(7)
      expect(mh.delMin()).toEqual(5);
    })

    it("after adding 7, 5 elements", () => {
      const mh = new MinPriorityQueue()
      mh.insert(5)
      mh.insert(7)
      expect(mh.delMin()).toEqual(5);
    })

    it("after adding 20, 16, 18, 14, 8, 15, 1, 5, 9, 7, 19 elements", () => {
      const mh = new MinPriorityQueue()
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
      expect(mh.delMin()).toEqual(1);
      expect(mh.delMin()).toEqual(5);
      expect(mh.delMin()).toEqual(7);
    })

    it("after adding 0, 1, 2, ..., 49, 50 elements", () => {
      const mh = new MinPriorityQueue()
      const UPPER_LIMIT = 50;
      for (let i = 0; i < UPPER_LIMIT + 1; i++) {
        mh.insert(i)
      }
      for (let i = 0; i < UPPER_LIMIT + 1; i++) {
        expect(mh.delMin()).toEqual(i);
      }
    })

  })

  describe('getMin', () => {
    it("after adding 7, 5 elements", () => {
      const mh = new MinPriorityQueue()
      mh.insert(7)
      mh.insert(5)
      expect(mh.getMin()).toEqual(5);
      expect(mh.size()).toEqual(2);
    })
  })
})
