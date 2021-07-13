const removeConsecutiveDuplicates = str => {     
    let arr = str.split(' ')
    let finalStr = ''
      for ( let i = 0; i < arr.length; i++) {
           let elem = arr[i]
           if ( elem !== arr[i+1]){
             finalStr += elem + ' '
           }   
      }
         return finalStr.trim('')
  }
  