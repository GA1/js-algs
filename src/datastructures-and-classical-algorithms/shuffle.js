
function shuffle(array) {
  const getRandomIntFromZeroToMaxExcluding = (max) => {
    return Math.floor(Math.random() * max);
  }

  const swap = (array, i, j) => {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  const result = [...array]
  for (let i = 0; i < array.length - 1; i++) {
    const j = i + getRandomIntFromZeroToMaxExcluding(result.length - i)
    swap(result, i, j)
  }
  return result
}


module.exports.shuffle = shuffle
