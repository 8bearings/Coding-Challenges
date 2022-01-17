// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
    let count = 0
    if(on+wait <= cap){
     count + 0
    }else{
      count = cap - (on+wait) 
    }
    return Math.abs(count)
  }