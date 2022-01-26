// Make a function that receive age, and return what they drink.
13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

function peopleWithAgeDrink(old) {
    let drinks = {thirteen:"drink toddy", seventeen:"drink coke", eighteen:"drink beer", twenty:"drink beer", thirty:"drink whisky" }
    let count = ''
    if(old<14){
      count = drinks.thirteen
    }else if(old<18){
      count = drinks.seventeen
    }else if(old<21){
      count = drinks.eighteen
    }else{
      count = drinks.thirty
    }
    return count
  }; 