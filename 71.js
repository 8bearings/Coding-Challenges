// Given an array of integers as strings and SVGAnimatedNumberList, return the sum of all the array values if all were numbers

function sumAllValues(arr){
    return arr.reduce((a,c)=> a + Number(c),0)
}
console.log(sumAllValues([9,3,'7','3']), 22)