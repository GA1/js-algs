const { MedianCalculator } = require('./median-calculator')

describe('median calculator', () => {

  it('returns median for 2', () => {
    const mc = new MedianCalculator()
    mc.insert(2)
    expect(mc.getMedian()).toBe(2);
  });

  it('returns median for 2, 5', () => {
    const mc = new MedianCalculator()
    mc.insert(2)
    mc.insert(5)
    expect(mc.getMedian()).toBe(3.5);
  })

  it('returns median for 2, 7, 5', () => {
    const mc = new MedianCalculator()
    mc.insert(2)
    mc.insert(7)
    mc.insert(5)
    expect(mc.getMedian()).toBe(5);
  })

  it('returns median for 2, 5, 7', () => {
    const mc = new MedianCalculator()
    mc.insert(2)
    mc.insert(5)
    mc.insert(7)
    expect(mc.getMedian()).toBe(5);
  })

  it('returns median for 2, 5, 7, 11, 13, 17, 19', () => {
    const mc = new MedianCalculator()
    mc.insert(2)
    mc.insert(5)
    mc.insert(7)
    mc.insert(11)
    mc.insert(13)
    mc.insert(17)
    mc.insert(19)
    expect(mc.getMedian()).toBe(11);
  })

})
