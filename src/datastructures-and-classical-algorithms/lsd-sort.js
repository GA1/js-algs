

function LSDsort(toSort) {
  const N = toSort.length;
  const W = toSort[0].length
  const charToInt = (array, i, d) => array[i].charCodeAt(d) - 97
  const result = toSort.map(s => s)
  const aux = Array(N).fill(0)
  for (let d = W - 1; 0 <= d; d--) {
    const counters = Array(N + 1).fill(0)
    for (let i = 0; i < N; i++) {
      counters[charToInt(result, i, d) + 1]++
    }
    for (let i = 0; i < N; i++) {
      counters[i + 1] += counters[i]
    }
    for (let i = 0; i < N; i++) {
      aux[counters[charToInt(result, i, d)]++] = result[i]
    }
    for (let i = 0; i < N; i++) {
      result[i] = aux[i]
    }
  }
  return result
}

module.exports.LSDsort = LSDsort
