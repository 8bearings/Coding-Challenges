/* With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them. */

function getRealFloor(n) {
    let count = 0
    if(n <= 0){
      count = n
    }else if(n < 13){
      count = n - 1
    }else{
      count = n - 2
    }
     return count 
  }