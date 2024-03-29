// Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// //
// You have to create the function factorial that receives n and returns n!. You have to use recursion.


function fac(n){
    return n < 2 ? 1 : n * fac(n - 1)
   
}
console.log(fac(3))



// O(n)