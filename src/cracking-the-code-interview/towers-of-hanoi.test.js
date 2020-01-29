const {HanoiTowerStack} = require('./hanoi-tower-stack');
const {TowersOfHanoi} = require('./towers-of-hanoi');

describe('HanoiTowerStack', () => {
  it('solves for 1 disk', () => {
    const stack1 = new HanoiTowerStack()
    const stack2 = new HanoiTowerStack()
    const stack3 = new HanoiTowerStack()
    const hts = new TowersOfHanoi(stack1, stack2, stack3)
    stack1.push(1)
    hts.solve()
    // expect(hts.getNumberOfUsedMoves()).toBe(1);
  });
})
