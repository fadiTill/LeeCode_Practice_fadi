var maxSubArray = function(nums) {
    //array = nums 
    // found lagest subarray 
    //and return its sum 
    
   // solution
    //loop with pointer and looks if presedent value greater from new one 
    //if greater drop past value else keep it 
   
    //1. def solution
    let solution = nums[0];
    
    //2.loop starting from one 
    for (let i = 1 ; i < nums.length; i++){
        
       // The Math.max() function returns the largest of the zero or more numbers //given as input parameters, or NaN if any parameter isn't a number and can't be //converted into one.
       // console.log(Math.max(-1, -3, -2));
// expected output: -1

        nums[i] = Math.max(nums[i], nums[i]+nums[i-1]);
        solution = Math.max(solution,nums[i])
        
    }
    
    return solution;
    
};