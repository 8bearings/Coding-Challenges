/* We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4]. */

function vowelIndices(word){
    console.log(word)
          let vowels = ['a','e','i','o','u','y']
          let splitWord = word.toLowerCase().split('')
          let newArr = []
          
          for(let i = 0; i<splitWord.length; i++){
            vowels.forEach(vowel =>{
               if(splitWord[i] === vowel){
              newArr.push(i+1)
            }
          }
            )}
            
           return newArr
        }