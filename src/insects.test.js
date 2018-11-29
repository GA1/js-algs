const insects = require('./insects');
const isSolved = insects.isSolved;
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

  it('isSolved when lacking one block', () => {
    const ib = new InsectBlock(1, 2, 3, 4)
    const board = [[ib, ib, ib], [ib, ib, ib], [ib, ib, null]];
    expect(isSolved(board)).toBe(false);
  })

  it('isSolved when correct board', () => {
    const ib1 = new InsectBlock(1, 2, 3, 4)
    const ib2 = new InsectBlock(1, 2, 4, 1)
    const ib3 = new InsectBlock(1, 4, 1, 1)
    const ib4 = new InsectBlock(4, 2, 8, 1)
    const ib5 = new InsectBlock(3, 5, 8, 1)
    const ib6 = new InsectBlock(2, 7 ,8, 6)
    const ib7 = new InsectBlock(7, 1, 1, 1)
    const ib8 = new InsectBlock(7, 1, 1, 2)
    const ib9 = new InsectBlock(7, 1, 2, 2)
    const board = [ib1, ib2, ib3, ib4, ib5, ib6, ib7, ib8, ib9];
    expect(isSolved(board)).toBe(true);
  })

  it('isSolved when connection for block1 and block4 is incorrect', () => {
    const ib1 = new InsectBlock(1, 2, 3, 4)
    const ib2 = new InsectBlock(1, 2, 5, 1)
    const ib3 = new InsectBlock(1, 4, 1, 1)
    const ib4 = new InsectBlock(4, 2, 8, 1)
    const ib5 = new InsectBlock(3, 5, 8, 1)
    const ib6 = new InsectBlock(2, 7 ,8, 6)
    const ib7 = new InsectBlock(7, 1, 1, 1)
    const ib8 = new InsectBlock(7, 1, 1, 2)
    const ib9 = new InsectBlock(7, 1, 2, 2)
    const board = [ib1, ib2, ib3, ib4, ib5, ib6, ib7, ib8, ib9];
    expect(isSolved(board)).toBe(false);
  })




})
