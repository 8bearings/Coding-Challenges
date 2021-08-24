//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containDup(arr){
    let map = {}
    for(let i = 0; i< arr.length; i++){
        map[arr[i]] = map[arr[i]] + 1 || 1

        if(map [arr[i]] > 1){
            return true
        }
    }
    return false
}