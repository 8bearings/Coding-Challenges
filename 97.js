// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverseStr(str){
    // return str.split("").reverse().join('')
    let arr = []
    let strSplit = str.split("")
    for(let i = strSplit.length - 1; i >= 0 ; i--){
        arr.push(strSplit[i])
    }
    
    return arr.join('')
}
console.log(reverseStr("Butter Peacan"))