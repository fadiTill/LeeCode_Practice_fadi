// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1



// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}


//note  long string haystack
//return index of smaller stack = needle

//if needle empty return 0
var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
    
    if (needle === haystack) return 0;
    
    //Loop trought haystack 

    // "hello" length = 5 
    //     |
    //     2
    // "ll" length = 2  
  // "ll" index = 2
    for(let i=0; i<= haystack.length - needle.length; i++) {
        
        if(needle === haystack.substring(i, i+needle.length)){
            return i;
        }
    }
    //if no match  -1 if needle is not part of haystack.

 return -1;   
};