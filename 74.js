// Show even numbers
 
function showEvenNumbers(array){
 
    
    let evenNumbers = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNumbers.push(array[i]);
        }
    }
        console.log(evenNumbers)
        return evenNumbers;
    }
  
  showEvenNumbers([1,2,3,4,5,6,7,8])

  
