

function solution(s) {
  const words = s.split(' ')
  const alphanumericRegex = /^[a-z0-9]+$/i;
  const filteredWords = words
    .filter(w => alphanumericRegex.test(w))
    .filter(w => w.replace(/[^a-zA-Z]/g, "").length % 2 == 0)
    .filter(w => w.replace(/[^0-9]/g, "").length % 2 == 1)
  if (filteredWords.length === 0)
    return -1
  return filteredWords.reduce(
    (acc, current) =>
      acc < current.length ? current.length : acc,
    filteredWords[0].length
  )
}

module.exports.solution = solution