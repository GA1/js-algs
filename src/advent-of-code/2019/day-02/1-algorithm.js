
function algorithm1(s) {
  const split = s.split(',').map(s => Number(s))
  for (let i = 0; i < split.length; i += 4)  {
    if (split[i] === 99) {
      break;
    }
    else if (split[i] === 1) {
      const newValue = split[split[i + 1]] + split[split[i + 2]]
      split[split[i+3]] = newValue
    }
    else if (split[i] === 2) {
      const newValue = split[split[i + 1]] * split[split[i + 2]]
      split[split[i+3]] = newValue
    }
  }
  return split.map(n => n.toString()).join(',')
}

module.exports.algorithm1 = algorithm1
