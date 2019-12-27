

function integerSort(toSort) {
  const N = toSort.length;
  const counters = Array(N + 1).fill(0)
  for (let i = 0; i < N; i++) {
    counters[toSort[i] + 1]++
  }
  for (let i = 0; i < N; i++) {
    counters[i + 1] += counters[i]
  }
  const result = Array(N).fill(0)
  for (let i = 0; i < N; i++) {
    result[counters[toSort[i]]++] = toSort[i]
  }
  return result
}

module.exports.integerSort = integerSort
