// reverse a string
function reverseString(text){
    return [...text].rverse().join()
}

// reverse with recursion

function reverseString(){
    if(text === ""){
        return ""
    }else{
        return reverseString(text.substr(1)) + text[0]
    }
}


// Solving Factorial with recursion

function factorial(n){
    if(n==1 || n==0){
        return 1
        
    }else{
        return n * factorial(n-1)
    }
}
console.log(factorial(4))

factorial(4)
    4 * factorial(3)
        3 * factorial(2)
            2 * factorial(1)
                 // 24


                 