// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.

  function isAtMostOneCharDifference(s1, s2) {
  if (1 < Math.abs(s1.length - s2.length))
    return false
  if (s1 === s2) {
    return true
  }
  if (s1.length === s2.length) {
    let numberOfDifferences = 0
    for (let i = 0; i < s1.length; i++) {
      if (s1.charAt(i) !== s2.charAt(i)) {
        numberOfDifferences++
      }
    }
    return numberOfDifferences < 2
  }
  let shorter, longer
  if (Math.min(s1.length) < Math.min(s2.length)) {
    shorter = s1
    longer = s2
  } else {
    shorter = s2
    longer = s1
  }
  let numberOfDifferences = 0
  for (let i = 0; i < shorter.length && i + numberOfDifferences < longer.length;) {
    if (shorter.charAt(i) !== longer.charAt(i + numberOfDifferences)) {
      numberOfDifferences++
    } else {
      i++
    }
  }
  return numberOfDifferences < 2
}

module.exports.isAtMostOneCharDifference = isAtMostOneCharDifference

