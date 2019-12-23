function hasAtLeastOneGroupOfExactlyTwoSameDigits(digits) {
  const digitsForWhichGoodPairsExist = new Set()
  let counter = 1
  for (let i = 1; i < digits.length; i++) {
    const prevD = digits[i-1]
    const d = digits[i]
    if (prevD === d) {
      counter++
    } else {
      counter = 1
    }
    if (counter === 2) {
      digitsForWhichGoodPairsExist.add(d)
    } else if (counter === 3) {
      digitsForWhichGoodPairsExist.delete(d)
    }
  }
  return 0 < digitsForWhichGoodPairsExist.size
}

function algorithm2(limit1, limit2) {
  function possiblePasswords(accumulator, digits) {
    for (let digitToAdd = 0; digitToAdd < 10; digitToAdd++) {
      if (digits.length === 0 || (digits.length !== 0 && digits[digits.length - 1] <= digitToAdd)) {
        const newDigits = digits.map(d => d)
        newDigits.push(digitToAdd)
        if (newDigits.length === 6) {
          if (hasAtLeastOneGroupOfExactlyTwoSameDigits(newDigits)) {
            accumulator.push(newDigits)
          }
        } else {
          possiblePasswords(accumulator, newDigits)
        }
      }
    }
  }
  const acc = []
  possiblePasswords(acc, [])
  const correctPasswordsInRange = acc
    .filter(password => password[0] !== 0)
    .map(password => Number(password.map(digit => digit.toString()).join('')))
    .filter(passwordAsNumber => limit1 <= passwordAsNumber && passwordAsNumber <= limit2)
  return correctPasswordsInRange
}

module.exports.algorithm2 = algorithm2
module.exports.hasAtLeastOneGroupOfExactlyTwoSameDigits = hasAtLeastOneGroupOfExactlyTwoSameDigits
