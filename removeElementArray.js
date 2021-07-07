//27. Remove Element

// Share
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }



var removeElement = function(nums, val) {
    //note
      //arrays of nums
      //remove instances of value
      //return new  array length
      //Do not allocate extra space for another array.
      
      
     // example 
       //  Input: nums = [3,4,4,3,], val = 3
       // Output: 2, nums = [4,4,_,_]
       // Explanation: Your function should return k = 2, with the first two elements of         nums being 2.
       // It does not matter what you leave beyond the returned k (hence they are            //underscores).
      
      //solution
      //use pointer loop and iterate the pointer if equal remove 
      
      
      
      //1.edge case if empty
      if (!nums) return 0;
      //2.loop nums 
      for(let i = 0; i < nums.length; i++) {
       //3. check if number equal to val 
          if(nums[i]===val){
       //4.if  the same remove 
          nums.splice(i, 1);
          //5.pointer change position
          i--
          }  
      }
      
  return nums.length;
  };