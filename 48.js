//  Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
    const caps = []
    word.split('').forEach((e,i)=>{
      if(e === e.toUpperCase()){
        caps.push(i)
      }
    })
    return caps           
    };
    