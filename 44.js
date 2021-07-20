/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate. */

function duplicateEncode(word){
    let chars = word.toLowerCase().split('')
    let result = ''
    
    for(let i = 0; i < chars.length; i++){
      if(chars.indexOf(chars[i])=== chars.lastIndexOf(chars[i])){
        result += '('
      }else{
        result += ')'
      }
    }
    
    return result
  }
  