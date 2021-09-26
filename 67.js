// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    let filtGood = x.filter(function(score){
      return score.length >= 4
    })
    let filtBad = x.filter(function(score){
      return score.length >= 3
    })
     console.log(filtGood,filtBad)
    if(filtGood.length == 1 || filtGood.length == 2){
      return 'Publish!'
    }else if(filtGood.length > 2){
      return 'I smell a series!'
    }else{
      return 'Fail!'
    }

   }