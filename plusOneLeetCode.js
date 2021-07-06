// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.


/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    //loop trought the array from right to left
    for (let i = digits.length-1; i>=0; i--) {
        //check if 9
        if (digits[i]!= 9){
        digits[i]++;
        return digits
        //if 9 return 0
    }else{
        digits[i] = 0;
        //if 9 need to increrement next element by 1 
    }
        
    }
//push 1 to the front
digits.unshift(1)
return digits;
       
};