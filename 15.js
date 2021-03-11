/* Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct. */

function spEng(sentence){
    sentence = sentence.toLowerCase()
  if(sentence.includes('english')){
    return true
  }else{
    return false
  }
  }