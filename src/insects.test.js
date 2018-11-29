const insects = require('./insects');
const InsectBlock = insects.InsectBlock;

describe('insectBlocks', () => {

  it('getters', () => {
    const ib = new InsectBlock(1, 2, 3, 4)
    expect(ib.getTop()).toBe(1);
    expect(ib.getRight()).toBe(2);
    expect(ib.getBottom()).toBe(3);
    expect(ib.getLeft()).toBe(4);
  })

  it('equals for same blocks', () => {
    const ib1 = new InsectBlock(1, 2, 3, 4)
    const ib2 = new InsectBlock(1, 2, 3, 4)
    expect(ib1.equals(ib2)).toBe(true);
  });

  it('equals for different blocks', () => {
    const ib1 = new InsectBlock(1, 2, 3, 4)
    const ib2 = new InsectBlock(1, 2, 3, 5)
    expect(ib1.equals(ib2)).toBe(false);
  })

  it('turn clockwise by 90 degrees', () => {
    const ib1 = new InsectBlock(1, 2, 3, 4)
    const ib2 = new InsectBlock(4, 1, 2, 3)
    expect((ib1.turn90degreesClockwise(ib2)).equals(ib2)).toBe(true);
  })

})
