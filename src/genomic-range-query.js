

function solve(S, P, Q) {
  function getAccumulatorsFromLeft(S) {
    const emptyCounter = {
      A: 0,
      C: 0,
      G: 0,
      T: 0,
    }
    const result = [emptyCounter]
    for (let i = 0; i < S.length + 1; i++) {
      const prev = result[i];
      const newCounter = {
        A: prev.A,
        C: prev.C,
        G: prev.G,
        T: prev.T,
      }
      if (S[i] === 'A') {
        newCounter.A++
      } else if (S[i] === 'C') {
        newCounter.C++
      } else if (S[i] === 'G') {
        newCounter.G++
      } else {
        newCounter.T++
      }
      result.push(newCounter)
    }
    return result;
  }

  function subtractACGTaccumulators(minuend, subtrahend) {
    return {
      A: minuend.A - subtrahend.A,
      C: minuend.C - subtrahend.C,
      G: minuend.G - subtrahend.G,
      T: minuend.T - subtrahend.T,
    }
  }

  const accFromLeft = getAccumulatorsFromLeft(S)

  const result = []
  for (let i = 0; i < P.length; i++) {
    const difference = subtractACGTaccumulators(accFromLeft[Q[i] + 1], accFromLeft[P[i]])
    if (difference.A > 0)
      result.push(1)
    else if (difference.C > 0 )
      result.push(2)
    else if (difference.G > 0 )
      result.push(3)
    else
      result.push(4)
  }
  return result
}

module.exports.solve = solve
