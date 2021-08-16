// Reverse the order of the characters of each word

function reverseWords(str){
    str.split('')
    .map(w=>
        w.split('')
        .reverse()
        .join('')
        )
    .join(' ')
}

function reverseWords(str){
    const revWords = []
    str.split(' ').forEach(w=> {
        let currentWordRev = ''
        for(let i = w.length - 1; i >= 0; i--){
            currentWordRev += w[i]
        }
        revWords.push(currentWordRev)
    })
    return revWords.join(' ')
}