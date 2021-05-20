
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

function highestLowest(array) {
     let newArr = array.sort((a, b)=> a - b)
        newArr.pop()
        newArr.shift()
    let finalArr = newArr.reduce((a,b)=> a + b)
    console.log(finalArr)
          }
          console.log(highestLowest([1, 1, 11, 2, 3]))
