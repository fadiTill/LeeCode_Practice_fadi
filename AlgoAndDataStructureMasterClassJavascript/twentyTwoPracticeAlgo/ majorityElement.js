// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3


var majorityElement = function(nums) {
    //example 1
    //[1,1,2,3,4,5,6,7,7,7,7,7,7,7]
    // nums.length/2  =>  n/2 = 7
    //can we have more then one majority element ?
    let count = {}
    let n = nums.length/2
    
     console.log(n)
    for(let i= 0; i < nums.length; i++){
      let num = nums[i]
      // console.log(num)
        count[ num] ?  count[num]+=1 : count[ num]=1;
         //console.log(count)
    }
    for(let keys in count){
         
        console.log(count[keys])
   
         if(count[keys] > n) {
             console.log(n)
             return keys
         }
    }
    
   
    
};