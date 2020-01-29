
class TowersOfHanoi {

  constructor(sourceStack, auxiliaryStack, destinationStack) {
    this.numberOfMoves = 0
    this.sourceStack = sourceStack
    this.auxiliaryStack = auxiliaryStack
    this.destinationStack = destinationStack
    this.solved = false
  }

  solve() {
    const N = this.sourceStack.size()

    this.solved = true

    return this.numberOfMoves
  }

  getNumberOfUsedMoves() {
    if (!this.solved) {
      throw new Error('Unsupported operation: the problem must be solved first')
    }
  }
}
module.exports.TowersOfHanoi = TowersOfHanoi
