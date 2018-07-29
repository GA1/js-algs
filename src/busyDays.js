
function solve(reservations) {
  function __formatDate(d) {
    var month = '' + (d.getMonth() + 1)
    var day = '' + d.getDate()
    var year = d.getFullYear()
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  
  let reservationsDates = reservations.map(r => [new Date(r[0]), new Date(r[1])])
  let starts = new Array()
  let ends = new Array()
  reservationsDates.forEach(r => {
    starts.push(r[0])
    ends.push(r[1])
  })
  starts.sort((date1, date2) => date1 - date2)
  ends.sort((date1, date2) => date1 - date2)
  var busiestDay = null
  var n = 0
  var tempN = 0
  for (var i = 0, j = 0; i < starts.length && j < starts.length;) {
    if (starts[i] - ends[j] <= 0) {
      tempN++
      if (n < tempN) {
        n = tempN
        busiestDay = starts[i]
      }
      i++
    } else {
      tempN--
      j++
    }
  }
  return __formatDate(busiestDay)
}

module.exports.solve = solve;