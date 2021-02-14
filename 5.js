// Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers. 

function returnOdd(array){
   return newArr = []
   array.forEach((item,i) => {
       if(item % 2 !== 0 ){
           newArr.push(item)
       }
   })
   return newArr
}




console.log(returnOdd([2,3,45,4,3,4,3]))