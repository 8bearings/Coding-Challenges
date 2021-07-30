// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

function dup(s) {
    return s.map((str)=>
         str.split('').filter((e,i)=>e!== str[i-1]).join('')        
        )
    };