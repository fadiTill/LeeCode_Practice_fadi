// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


var runningSum = function(nums) {
    // array of number nums  
  // return running sum 
      // we want to store the result 
      let resultSum = []
      // we going to use a pointer for the running sum starting at 0, it tracks the current sum 
      let currentSum = 0;
      // loop trought the array 
      for(let i = 0; i< nums.length; i++ ){
         // and set currentValue to nums[i]
       let currentValue = nums[i]
       // add current value to currentSum
        currentSum += currentValue 
          //them push to result array
          resultSum.push(currentSum)
      } 
      // return result array with running sum 
      return resultSum
  };