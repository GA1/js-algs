// Permutations with Dups: Write a method to compute all permutations of a string whose characters are
// not necessarily unique. The list of permutations should not have duplicates.

function permutationsWithDuplicates(s) {
  const N = s.length
  function permutationsWithDuplicatesRecursive(s, substring, acc) {
    if (substring.length === N) {
      acc.add(substring)
    } else {
      for (let i = 0; i < s.length; i++) {
        permutationsWithDuplicatesRecursive(
          s.slice(0, i) + s.slice(i + 1),
          substring + s.charAt(i),
          acc
        )
      }
    }
  }
  const result = new Set()
  permutationsWithDuplicatesRecursive(s, '', result)
  return result
}

module.exports.permutationsWithDuplicates = permutationsWithDuplicates
