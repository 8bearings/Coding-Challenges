// Please create a function that takes in a number and a word. 
// If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"! 


function numWord(n1,w1){
    if (w1.length * n1 > 100){
        alert('WINNER')
    }else{
        console.log('YOU LOSE HAHAAHHAAHAHAHA')
    }
}
numWord(4,'butter')