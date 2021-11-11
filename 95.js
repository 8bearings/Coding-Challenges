/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    for(let i = 1; i <= nums.length; i++){
        nums.forEach(num =>{
            if(num == i){
                return nums.reduce((accumulator, currentValue, index) =>{
                    accumulator - 1
                }, 0)

            }
        })
           }
        }
    
