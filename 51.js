function fizzBuzz(num){
    const output = []
    for(let i = 1; i<= num; i++){
        if(i% 6 === 0){
            output.push('Fizz Buzz')
        }else if(i % 2 === 0){
            output.push('Fizz')
        }else if(i % 3 === 0){
            output.push(i)
        }
    }
    return output(i)
}
console.log(fizzBuzz(60))