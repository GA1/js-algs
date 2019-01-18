function Queue() {
  this.first = null
  this.last = null
  this.N = 0
}

Queue.prototype.isEmpty = function() {
  return this.size() === 0
}


Queue.prototype.size = function() {
  return this.N
}

Queue.prototype.enqueue = function(item) {
  const oldLast = this.last
  const newLast = {
    item: item,
    next: null,
  }
  if (this.isEmpty())
    this.first = newLast
  else
    oldLast.next = newLast
  this.last = newLast
  this.N++
}

Queue.prototype.dequeue = function() {
  if (this.isEmpty())
    throw Error('Queue underflow')
  const item = this.first.item
  this.first = this.first.next
  this.N--
  if (this.isEmpty())
    this.last = null
  return item
}

Queue.prototype.peek = function() {
  if (this.isEmpty())
    throw Error('Queue underflow')
  const item = this.first.item
  return item
}


function solve(A) {
  function getValidSteps(steps, curr, A, N) {
    const result = []
    for (let i = 0; i < steps.length; i++) {
      const s = steps[i];
      if (curr.position + s === N || A[curr.position + s] === 1)
        result.push(s)
    }
    return result
  }
  const N = A.length
  const queue = new Queue()
  queue.enqueue({position: -1, numberOfSteps: 0})
  while (!queue.isEmpty()) {
    const curr = queue.dequeue()
    if (curr.position === N)
      return curr.numberOfSteps
    const steps = stepsLowerOrEqualThan(N - curr.position)
    const validSteps = getValidSteps(steps, curr, A, N)
    validSteps.forEach(s => {
      queue.enqueue({
        position: curr.position + s,
        numberOfSteps: curr.numberOfSteps + 1
      })
    })
  }
  return -1

}

function stepsLowerOrEqualThan(N) {
  const steps = []

  for (let i = 2; ; i++) {
    let currFib
    if (i < 4) {
      currFib = fibonacci(i)
    } else {
      currFib = steps[i - 4] + steps[i - 3]
    }
    if (currFib <= N) {
      steps.push(currFib)
    } else {
      break
    }
  }

  return steps
}

function fibonacci(n) {
  if (n === 0)
    return 0
  else if (n === 1)
    return 1
  else
    return fibonacci(n - 1) + fibonacci(n - 2)
}

module.exports.solve = solve
module.exports.stepsLowerOrEqualThan = stepsLowerOrEqualThan