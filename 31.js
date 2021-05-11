/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/

function find_average(array) {
 let newArr = array.reduce((total, average) => (total + average) , 0)
   return newArr / array.length
   }
   
   