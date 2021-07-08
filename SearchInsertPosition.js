//35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

var searchInsert = function(nums, target) {
    
//loop trought array nums
for(let i= 0; i< nums.length; i++)
//check if target is smaler or equal and return index of target
if (target <= nums[i]){
    return i
    
    }
    // else if array empty return 0 if target is 
    //greater them all numbers add it to the end index of target  equal lenght
return nums.length
    
   
};