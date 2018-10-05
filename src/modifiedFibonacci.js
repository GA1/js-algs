const BigNumber = require('bignumber.js');

function fibonacciModified(t1, t2, n) {
  function fibonacci(t1, t2, n) {
    if (n === 1)
      return new BigNumber(t1.toString())
    else if (n === 2) {
      return new BigNumber(t2.toString())
    } else {
      const a = fibonacci(t1, t2, n - 2)
      const b = fibonacci(t1, t2, n - 1)
      return a.plus(b.multipliedBy(b))
    }
  }
  return fibonacci(t1, t2, n).toPrecision()
}

module.exports.solve = fibonacciModified;