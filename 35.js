// Count the number of vowels

function vowelsCounter(text) {
    // Search text with Regex and store all matching instances 
    let matchingInstances = text.match(/[aeiou]/gi);
        if (matchingInstances) {    
        return matchingInstances.length
    } else {
        return 0
    }
}