// Convert number to reversed array of digits

function digitize(n) {
    let spread = new String(n).split('')
    let joinReverse = spread.reverse()
    return joinReverse.map(Number)
    }
    