// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

function century(year) {
    let buns = year / 100
    return Math.ceil(buns)
  }
  