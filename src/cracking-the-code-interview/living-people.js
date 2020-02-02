// Living People: Given a list of people with their birth and death years, implement a method to
// compute the year with the most number of people alive. You may assume that all people were born
// between 1900 and 2000 (inclusive). If a person was alive during any portion of that year, they should
// be included in that year's count. For example. Person (birth = 1908, death = 1909) is included in the
// counts for both 1908 and 1909.
function livingPeople(birthYears, deathYears) {
  const birthYearsSorted = [...birthYears].sort((e1, e2) => e1 - e2)
  const deathYearsSorted = [...deathYears].sort((e1, e2) => e1 - e2)
  const N = birthYearsSorted.length
  const M = deathYearsSorted.length
  let i = 0,
    j = 0
  let livingInThisYear = 0
  let maxLiving = 0
  let bestYear = birthYearsSorted[0]
  while (i < N && j < M) {
    if (birthYearsSorted[i] <= deathYearsSorted[j]) {
      livingInThisYear++
      if (maxLiving < livingInThisYear) {
        maxLiving = livingInThisYear
        bestYear = birthYearsSorted[i]
      }
      i++
    } else {
      livingInThisYear--
      j++
    }
  }
  return bestYear
}

module.exports.livingPeople = livingPeople
