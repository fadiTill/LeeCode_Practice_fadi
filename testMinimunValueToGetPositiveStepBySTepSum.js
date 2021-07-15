var minStartValue = function(nums) {
     
    let solution = false;
    
    for(let i = 1; solution === false ; i++ ){
       
        let sum = i;
       
        for(let j = 0; j < nums.length; j++){
            sum += nums[j];
            if(sum < 1){
                solution = false;
                break;
            } else if (sum > 0){
                solution = true;
            }
        }
        if (solution === true ) {
            return i;
        }
    }
    
};