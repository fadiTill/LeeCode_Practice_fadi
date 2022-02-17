// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// example1
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.


var isPalindrome = function(s) {
    
   
    // console.log(s)
    let newS = s.toLowerCase().split('').reverse().join()
    newS = newS.replace(/[^a-z0-9+]+/gi, '')
    // console.log( newS )
    s = s.toLowerCase().split('').join()
    s = s.replace(/[^a-z0-9+]+/gi, '')
   // console.log(s)
   
   
   if(s === newS){
       return true 
   }
  return false
};