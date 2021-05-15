
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function multiplyOrder(array) {
//     let newArr = array.forEach(element => {
//         element * element 
//     });
//     console.log(newArr)
//           }
          

          function multiplyOrder(array) {
            let newArr = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
            return newArr
                  }
                  console.log(multiplyOrder([1, 2, 3, 4]))


                  