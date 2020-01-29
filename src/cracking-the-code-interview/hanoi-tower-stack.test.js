const {HanoiTowerStack} = require('./hanoi-tower-stack');

describe('HanoiTowerStack', () => {
  it('when stack empty size is 0', () => {
    const stack = new HanoiTowerStack()
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it('when popping an empty stack an exception should be thrown', () => {
    const stack = new HanoiTowerStack()
    expect(() => {stack.pop()}).toThrow(new Error('HanoiTowerStack underflow'));
  })

  it('after pushing 1 element to stack size is 1', () => {
    const stack = new HanoiTowerStack()
    stack.push(2)
    expect(stack.size()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it('after pushing 2 elements to stack size is 2', () => {
    const stack = new HanoiTowerStack()
    stack.push(5)
    stack.push(2)
    expect(stack.size()).toBe(2);
  });

  it('after pushing and popping element size is 0 and element is returned', () => {
    const stack = new HanoiTowerStack()
    stack.push(5)
    const result = stack.pop()
    expect(result).toBe(5);
    expect(stack.size()).toBe(0);
  });

  it('after pushing twice and popping correct elements and size are returned', () => {
    const stack = new HanoiTowerStack()
    stack.push(7)
    stack.push(5)
    const result1 = stack.pop()
    expect(result1).toBe(5);
    expect(stack.size()).toBe(1);
    const result2 = stack.pop()
    expect(result2).toBe(7);
    expect(stack.size()).toBe(0);
  });

  it('throws when pushing a bigger element on a smaller one', () => {
    try {
      const stack = new HanoiTowerStack()
      stack.push(5)
      stack.push(7)
      expect(false).toBe(true);
    } catch(e) {
      expect(e.message).toEqual('Incorrect arguments: the element to insert is bigger than the last pushed one')
    }
  })

  it('after pushing twice and popping, peek returns correct values', () => {
    const stack = new HanoiTowerStack()
    stack.push(7)
    expect(stack.peek()).toBe(7);
    stack.push(5)
    expect(stack.peek()).toBe(5);
  });

})
