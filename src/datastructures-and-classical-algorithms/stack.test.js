const Stack = require('./stack').Stack;

describe('Stack', () => {
  describe('size', () => {
    it ('should return 0 for an empty Stack', () => {
      const stack = new Stack()
      expect(stack.size()).toEqual(0)
    })
  })
})

describe('Stack', () => {
  it('when stack empty size is 0', () => {
    const stack = new Stack()
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it('when popping an empty stack an exception should be thrown', () => {
    const stack = new Stack()
    expect(() => {stack.pop()}).toThrow(new Error('Stack underflow'));
  })

  it('after pushing 1 element to stack size is 1', () => {
    const stack = new Stack()
    stack.push(2)
    expect(stack.size()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it('after pushing 2 elements to stack size is 2', () => {
    const stack = new Stack()
    stack.push(2)
    stack.push(5)
    expect(stack.size()).toBe(2);
  });

  it('after pushing and popping element size is 0 and element is returned', () => {
    const stack = new Stack()
    stack.push(5)
    const result = stack.pop()
    expect(result).toBe(5);
    expect(stack.size()).toBe(0);
  });

  it('after pushing twice and popping correct elements and size are returned', () => {
    const stack = new Stack()
    stack.push(5)
    stack.push(7)
    const result1 = stack.pop()
    expect(result1).toBe(7);
    expect(stack.size()).toBe(1);
    const result2 = stack.pop()
    expect(result2).toBe(5);
    expect(stack.size()).toBe(0);
  });

  it('after pushing twice and popping, peek returns correct values', () => {
    const stack = new Stack()
    stack.push(5)
    expect(stack.peek()).toBe(5);
    stack.push(7)
    expect(stack.peek()).toBe(7);
  });

})
