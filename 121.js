// Complete the solution so that it reverses all of the words within the string passed in.
function reverseWords(str){
    let newStr = str.split(' ')
    let reverse =  newStr.reverse()
    return reverse.join(' ')
  }