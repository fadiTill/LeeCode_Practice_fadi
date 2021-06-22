var sortedSquares = function(nums) {
    // array of nums 
    // sorted in non decreasing order 
    //return array of quare number
    // sorted in incresing order 
    
    //example 
    //nums = [-4,-1,0,3,10]
    //[0,1,9,16,100] sorted 
    
    
    //solution
    
    
    //loop trought the array
    for (i= 0; i<nums.length;i++){
         //square each element 
        nums[i] = Math.pow(nums[i], 2)
      
         
    }
   
        
    // last return  sorted the array 
    return nums.sort((a,b) => a-b)
    
};