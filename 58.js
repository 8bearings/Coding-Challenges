// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

function finJewels(jewels, stones){
    const map = {},
            count = 0


    for(const jewel of jewels){
        map[jewel] = true
    }
    for(const stone of stones){
        if(map[stone]){
            count++
        }
    }
    return count
}