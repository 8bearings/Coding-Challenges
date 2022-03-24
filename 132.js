// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.



function descendingOrder(n){
    let nums = 0
    if(n.toString().length == 1){
      return n
    }else{
      nums = n.toString().split('').sort((a,b)=>(b-a)).join('')
    }
    return Number(nums)
  }