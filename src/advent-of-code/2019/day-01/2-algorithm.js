
function algorithm(n) {
  const fuelMass = Math.floor(n / 3) - 2
  if (fuelMass < 1) {
    return 0
  }
  return fuelMass + algorithm(fuelMass)
}

module.exports.algorithm = algorithm
