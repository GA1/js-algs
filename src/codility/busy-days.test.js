var task1 = require('./busy-days');

describe('busyDays solver', () => {

  it('should return the first date if only 1 range was provided', () => {
    let ranges = [
      ['2018-01-01', '2018-01-02'],
    ]
    expect(task1.solve(ranges)).toEqual('2018-01-01');
  })

  it('should return the busiest day for 2 non-overlaping ranges', () => {
    let ranges = [
      ['2018-01-01', '2018-01-02'],
      ['2018-01-03', '2018-01-04'],
    ]
    expect(task1.solve(ranges)).toEqual('2018-01-01');
  })

  it('should return the busiest day for 2 overlaping ranges', () => {
    let ranges = [
      ['2018-01-01', '2018-01-02'],
      ['2018-01-02', '2018-01-03'],
    ]
    expect(task1.solve(ranges)).toEqual('2018-01-02');
  });

  it('should return the busiest day for 2 overlaping ranges when 2 days overlap', () => {
    let ranges = [
      ['2018-01-01', '2018-01-03'],
      ['2018-01-02', '2018-01-04'],
    ]
    expect(task1.solve(ranges)).toEqual('2018-01-02');
  })

  it('should return the busiest day for 3 ranges', () => {
    let ranges = [
      ['2018-01-01', '2018-01-03'],
      ['2018-01-02', '2018-01-05'],
      ['2018-01-03', '2018-01-06'],
    ]
    expect(task1.solve(ranges)).toEqual('2018-01-03');
  });

  it('should return the busiest day for 3 ranges if one range contain all others', () => {
    let ranges = [
      ['2018-01-01', '2018-01-10'],
      ['2018-01-03', '2018-01-08'],
      ['2018-01-05', '2018-01-06'],
    ]
    expect(task1.solve(ranges)).toEqual('2018-01-05');
  })

})
