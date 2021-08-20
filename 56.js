let majorityElement = function(nums){
    const elem = {},
        count = 0,
        majVal = nums[0]
    
    for(let i = 0; i < nums.length; i++){
        if(!elem[nums[i]]){
            elem[nums[i]] = 1
        }else{
          elem[nums[i]]++  
        }
    }

    for(const prop in elem){
        if(elem[prop] > count){
            count = elem[prop]
            majVal = prop
        }
    }
    return majVal
}