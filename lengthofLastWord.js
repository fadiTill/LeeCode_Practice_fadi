// Length of Last WordGiven a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5


var lengthOfLastWord = function(s) {
    
    
    
    // creating a variable to store last word count
    let wordlength = 0
     // creating boolean set to true 
    let space = true;
    if (s.length === 0 ){
         return wordlength; 
    }
    //loop trought the array s starting by the end (right)
     for (let  i = s.length - 1; i >= 0; i-- ) {
         //while s charactere are not empty charactere"space"
         if(s.charAt(i) !== ' ') {
         //increment count by one 
             wordlength++;
         // set space to false 
           space = false;
     } else {
         if (!space){
           // stop loop
           break
             
         }
       } 
         
     }
    return wordlength
};