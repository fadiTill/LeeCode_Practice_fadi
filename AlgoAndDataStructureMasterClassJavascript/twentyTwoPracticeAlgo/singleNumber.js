
// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

var singleNumber = function(nums) {
    let data = {}
    for(let i= 0; i< nums.length; i++){
       let num = nums[i];
     data[ num] ?  data[num]+=1 : data[ num]=1;
       for(let keys in data){
        console.log(`${keys}: ${data[keys]}`);
       if (data[keys] < 2)
           return keys
   }
}
};