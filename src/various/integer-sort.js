

function integerSort(toSort) {
  const N = toSort.length;
  const counters = Array(N).fill(0)
  for (let i = 0; i < N; i++) {
    counters[toSort[i]]++
  }
  const accCounters = Array(N).fill(0)
  accCounters[0] = 0
  for (let i = 1; i < N; i++) {
    accCounters[i] = accCounters[i - 1] + counters[i - 1]
  }
  const result = Array(N).fill(0)
  for (let i = 0; i < N; i++) {
    result[accCounters[toSort[i]]++] = toSort[i]
  }
  return result
}

module.exports.integerSort = integerSort
