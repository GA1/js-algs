const playersNames = ['Andro', 'GA1', 'Luke', 'Kamil', 'Kondzio', 'Kostek']
const players = [0, 1, 2, 3, 4, 5]

const getAllPossiblePairs = (players) => {
  const result = []
  for (let i = 0; i < players.length; i++) {
    const player1 = players[i]
    for (let j = 0; j < players.length; j++) {
      const player2 = players[j]
      if (i < j) {
        result.push([player1, player2])
      }
    }
  }
  return result
}

const createMatches = (pairs) => {

}

const findMaxDiffInCounterTable = (counterTable) => {
  const findMin = () => {
    let tempMin = counterTable[0]
    let bestMin = tempMin
    for (let i = 1; i < counterTable.length; i++) {
      tempMin = counterTable[i]
      if (tempMin < bestMin) {
        bestMin = tempMin
      }
    }
    return bestMin
  }

  const findMax = () => {
    let tempMax = counterTable[0]
    let bestMax = tempMax
    for (let i = 1; i < counterTable.length; i++) {
      tempMax = counterTable[i]
      if (bestMax < tempMax) {
        bestMax = tempMax
      }
    }
    return bestMax
  }

  return findMax() - findMin()
}

console.log(getAllPossiblePairs(players))


module.exports.findMaxDiffInCounterTable = findMaxDiffInCounterTable
