const {LSDsort} = require('./lsd-sort');

describe('LSD sort', () => {

  it("'cb', 'ba', 'ab'", () => {
    expect(LSDsort(['cb', 'ba', 'ab'])).toEqual(['ab', 'ba', 'cb']);
  })

  it("'dab', 'add', 'cab', 'fad', 'fee', 'bad', 'dad', 'bee', 'fed', 'bed', 'ebb', 'ace'", () => {
    expect(LSDsort(['dab', 'add', 'cab', 'fad', 'fee', 'bad', 'dad', 'bee', 'fed', 'bed', 'ebb', 'ace']))
      .toEqual(['ace', 'add', 'bad', 'bed', 'bee', 'cab', 'dab', 'dad', 'ebb', 'fad', 'fed', 'fee'])
  })
})
