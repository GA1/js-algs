const { livingPeople } = require('./living-people')

describe('livingPeople', () => {
  it('solves for [1910], [1920]', () => {
    const result = livingPeople([1910], [1920])
    expect(result).toEqual(1910)
  })
  it('solves for [1910, 1920], [1920, 1920]', () => {
    const result = livingPeople([1910, 1920], [1920, 1920])
    expect(result).toEqual(1920)
  })
})
