function countPositivesSumNegatives(input) {
    let newArr = []
    let posCount = 0
    let negCount = 0
   if(input === null) return []
    input.forEach((n,i) =>{
      if(input == 0){
        negCount = 0
        posCount = 0
      }else if(n > 0){
        posCount++
      }else if(n < 0){
         negCount += input[i]
      
      }
    } )
if(posCount+negCount == 0){
 return []
}else{
return [posCount,negCount] 
}
}