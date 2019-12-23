function hasAtLeastOnePairOfSameDigits(digits) {
  return !(digits[0] !== digits[1] &&
    digits[1] !== digits[2] &&
    digits[2] !== digits[3] &&
    digits[3] !== digits[4] &&
    digits[4] !== digits[5])
}

function algorithm1(limit1, limit2) {
  function possiblePasswords(accumulator, digits) {
    for (let digitToAdd = 0; digitToAdd < 10; digitToAdd++) {
      if (digits.length === 0 || (digits.length !== 0 && digits[digits.length - 1] <= digitToAdd)) {
        const newDigits = digits.map(d => d)
        newDigits.push(digitToAdd)
        if (newDigits.length === 6) {
          if (hasAtLeastOnePairOfSameDigits(newDigits)) {
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

module.exports.algorithm1 = algorithm1
