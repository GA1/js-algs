const {StackWithMinOperation} = require('./stack-with-min-operation')

describe('StackWithMinOperationWithMinOperation', () => {
  describe('min', () => {
    it('throws when stack empty', () => {
      try {
        const stack = new StackWithMinOperation()
        stack.min()
        expect(false).toBe(true);
      } catch (e) {
        expect(e.message).toBe('Unsupported operation: can\'t get min when stack is empty');
      }
    })

    it('returns the only element for stack [2]', () => {
      const stack = new StackWithMinOperation()
      stack.push(2)
      expect(stack.min()).toBe(2);
    })

    it('returns min for stack [2, 7]', () => {
      const stack = new StackWithMinOperation()
      stack.push(2)
      stack.push(7)
      expect(stack.min()).toBe(2);
    })

    it('returns min for stack [7, 2]', () => {
      const stack = new StackWithMinOperation()
      stack.push(7)
      stack.push(2)
      expect(stack.min()).toBe(2);
    })

  })

  it('when stack empty size is 0', () => {
    const stack = new StackWithMinOperation()
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it('when popping an empty stack an exception should be thrown', () => {
    const stack = new StackWithMinOperation()
    expect(() => {stack.pop()}).toThrow(new Error('StackWithMinOperation underflow'));
  })

  it('after pushing 1 element to stack size is 1', () => {
    const stack = new StackWithMinOperation()
    stack.push(2)
    expect(stack.size()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it('after pushing 2 elements to stack size is 2', () => {
    const stack = new StackWithMinOperation()
    stack.push(2)
    stack.push(5)
    expect(stack.size()).toBe(2);
  });

  it('after pushing and popping element size is 0 and element is returned', () => {
    const stack = new StackWithMinOperation()
    stack.push(5)
    const result = stack.pop()
    expect(result).toBe(5);
    expect(stack.size()).toBe(0);
  });

  it('after pushing twice and popping correct elements and size are returned', () => {
    const stack = new StackWithMinOperation()
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
    const stack = new StackWithMinOperation()
    stack.push(5)
    expect(stack.peek()).toBe(5);
    stack.push(7)
    expect(stack.peek()).toBe(7);
  });

})
