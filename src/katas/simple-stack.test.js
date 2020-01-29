const {SimpleStack} = require('./simple-stack');

describe('SimpleStack', () => {
  it('when popping an empty stack an exception should be thrown', () => {
    const stack = new SimpleStack()
    expect(() => {stack.pop()}).toThrow(new Error('Stack underflow'));
  })

  it('pops element pushed before', () => {
    const stack = new SimpleStack()
    stack.push(2)
    expect(stack.pop()).toBe(2);
  });

  it('pops element [2, 5] pushed before', () => {
    const stack = new SimpleStack()
    stack.push(2)
    stack.push(5)
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(2);
  });

  it('works when alternating push and pops', () => {
    const stack = new SimpleStack()
    stack.push(2)
    const result1 = stack.pop()
    stack.push(5)
    const result2 = stack.pop()
    expect(result1).toBe(2);
    expect(result2).toBe(5);
  });
})
