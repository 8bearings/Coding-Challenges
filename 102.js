// Write function bmi that calculates body mass index (bmi = weight / height2).

function bmi(weight, height) {
    if(weight / height**2 <= 18.5){
      return "Underweight"
    }if(weight / height**2 <= 25.0){
      return "Normal"
    }if (weight / height**2 <= 30){
      return "Overweight"
    }else if(weight / height**2 > 30){
      return "Obese"
    }
  }
  