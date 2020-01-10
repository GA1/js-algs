



function solution(s) {
  if (s.length % 2 === 0) {
    return -1
  }
  let counter = 0
  for (; counter < Math.floor(s.length / 2); counter++) {
    const j = s.length - 1 - counter;
    if (s.charAt(counter) !== s.charAt(j)) {
      return -1
    }
  }
  return counter
}

module.exports.solution = solution
