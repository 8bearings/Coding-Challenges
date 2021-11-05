
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. 

const removeConsecutiveDuplicates = s =>{
    let result = []
      let split = s.split(' ')
    for(let i = 0; i<split.length ; i++){
      if(split[i] != split[i - 1]){
        result.push(split[i])
      }else{
        
      }
    }
    return result.join(' ')
  }