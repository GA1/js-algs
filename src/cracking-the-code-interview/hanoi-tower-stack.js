const {Stack} = require('../datastructures-and-classical-algorithms/stack')

class HanoiTowerStack extends Stack {

  push(item) {
    if (!this.isEmpty() && this.peek() < item) {
      throw new Error('Incorrect arguments: the element to insert is bigger than the last pushed one')
    }
    super.push(item)
  }
}
module.exports.HanoiTowerStack = HanoiTowerStack
