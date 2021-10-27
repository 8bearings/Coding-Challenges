// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
    let toArr = s.split(' ')
    let count = []
   toArr.forEach(word =>{
     count.push(word.length)
   })
   let sorted = count.sort((a,b)=> (a-b))
   return sorted[0]
  }