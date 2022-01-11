
// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
const prevMultOfThree = n => {
    if (n === 0){
      return null;
    }if (n%3 === 0){
      return n;
    } 
    // the plus makes it number
    return prevMultOfThree(+n.toString().slice(0, -1))
   
  }
  