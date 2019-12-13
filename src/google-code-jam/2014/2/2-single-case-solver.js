

function solveSingleCase(C, F, X) {
  let bestTime = X / 2
  let numberOfFactories = 0
  let timeSpentOnBuildingFactories = 0
  while (true) {
    timeSpentOnBuildingFactories = timeSpentOnBuildingFactories + C / (F * numberOfFactories + 2)
    numberOfFactories = numberOfFactories + 1;
    const timeSpentOnFinalProduction = X / (2 + numberOfFactories * F);
    const currentTime = timeSpentOnBuildingFactories + timeSpentOnFinalProduction;
    if (currentTime < bestTime)
      bestTime = currentTime
    else {
      break;
    }
  }
  return parseFloat(bestTime.toFixed(7))
}

module.exports.solveSingleCase = solveSingleCase