// Permutations without Dups: Write a method to compute all permutations of a string of unique
// characters.

function permutationsWithoutDuplicates(s) {
  const N = s.length
  function permutationsWithoutDuplicatesRecursive(s, substring, acc) {
    if (substring.length === N) {
      acc.add(substring)
    } else {
      for (let i = 0; i < s.length; i++) {
        permutationsWithoutDuplicatesRecursive(
          s.slice(0, i) + s.slice(i + 1),
          substring + s.charAt(i),
          acc
        )
      }
    }
  }
  const result = new Set()
  permutationsWithoutDuplicatesRecursive(s, '', result)
  return result
}

module.exports.permutationsWithoutDuplicates = permutationsWithoutDuplicates
