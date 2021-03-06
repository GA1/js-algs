const Queue = require('./queue').Queue;

describe('Queue', () => {

  it('when queue empty size is 0', () => {
    const q = new Queue()
    expect(q.size()).toBe(0);
    expect(q.isEmpty()).toBe(true);
  });

  it('when dequeueing an empty queue an exception should be thrown', () => {
    const q = new Queue()
    expect(() => {q.dequeue()}).toThrow(new Error('Queue underflow'));
  })

  it('after enqueueing 1 element to queue size is 1', () => {
    const q = new Queue()
    q.enqueue(2)
    expect(q.size()).toBe(1);
    expect(q.isEmpty()).toBe(false);
  });

  it('after enqueueing 2 elements to queue size is 2', () => {
    const q = new Queue()
    q.enqueue(2)
    q.enqueue(5)
    expect(q.size()).toBe(2);
  });

  it('after enqueueing and dequeueing element size is 0 and element is returned', () => {
    const q = new Queue()
    q.enqueue(5)
    const result = q.dequeue()
    expect(result).toBe(5);
    expect(q.size()).toBe(0);
  });

  it('after enqueueing twice and dequeueing correct elements and size are returned', () => {
    const q = new Queue()
    q.enqueue(5)
    q.enqueue(7)
    const result1 = q.dequeue()
    expect(result1).toBe(5);
    expect(q.size()).toBe(1);
    const result2 = q.dequeue()
    expect(result2).toBe(7);
    expect(q.size()).toBe(0);
  });

  it('after enqueueing twice and dequeueing, peak returns correct values', () => {
    const q = new Queue()
    q.enqueue(5)
    expect(q.peek()).toBe(5);
    q.enqueue(7)
    expect(q.peek()).toBe(5);
    q.dequeue()
    expect(q.peek()).toBe(7);
  });

})