const {QueueImplementedWithTwoStacks} = require('./queue-implemented-with-2-stacks')

describe('QueueImplementedWithTwoStacks', () => {
  describe('size', () => {
    it('returns 0 for empty queue', () => {
      const q = new QueueImplementedWithTwoStacks()
      expect(q.size()).toEqual(0)
    })

    it("returns 1 for queue ['a']", () => {
      const q = new QueueImplementedWithTwoStacks()
      q.enqueue('a')
      expect(q.size()).toEqual(1)
    })

    it("returns 1 for queue ['a', 'b']", () => {
      const q = new QueueImplementedWithTwoStacks()
      q.enqueue('a')
      q.enqueue('b')
      expect(q.size()).toEqual(2)
    })
  })

  describe('enqueue, dequeue', () => {
    it('throws when queue empty', () => {
      const q = new QueueImplementedWithTwoStacks()
      try {
        q.dequeue()
        expect(true).toEqual(false)
      } catch (e) {
        expect(e.message).toEqual('Unsupported operation: the queue is empty')
      }
    })

    it('returns the only item in queue', () => {
      const q = new QueueImplementedWithTwoStacks()
      q.enqueue('a')
      expect(q.dequeue()).toEqual('a')
    })

    it("returns both items in queue ['a', 'b']", () => {
      const q = new QueueImplementedWithTwoStacks()
      q.enqueue('a')
      q.enqueue('b')
      expect(q.dequeue()).toEqual('a')
      expect(q.dequeue()).toEqual('b')
    })

    it("returns correctly when enqueue and dequeue alternate for items ['a', 'b', 'c']", () => {
      const q = new QueueImplementedWithTwoStacks()
      q.enqueue('a')
      q.enqueue('b')
      expect(q.dequeue()).toEqual('a')
      q.enqueue('c')
      expect(q.dequeue()).toEqual('b')
      expect(q.dequeue()).toEqual('c')
    })

  })

})
