/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array. */

function countPositivesSumNegatives(input) {
    if(input){
    let positiveArr = input.filter(num=> num > 0).length
    let negativeArr = input.filter(num=> num < 0).reduce((num,x)=> num+x) 
    let arr = [positiveArr,negativeArr]
    return arr
    }else{
       return []
    }
  
      
  }