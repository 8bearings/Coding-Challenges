// Find the mean (average) of a list of numbers in an array.

var findAverage = function (nums) {
    console.log(nums)
    let numSum = nums.reduce((x,z)=>x+z)  
    return numSum / nums.length
  }