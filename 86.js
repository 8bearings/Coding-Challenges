// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a,c)=> (a+c)) + arr2.reduce((a,c)=> (a+c))
  }