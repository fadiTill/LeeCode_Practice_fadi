// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.


// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Example 1:

// Input: s = "()"
// Output: true

//Example 2:
// Input: s = "([)]"
// Output: false

//note
    //string s 
    //determine if valid 
    //valid  = same type brakets && open/closed in correct order
    // empty string = true

    //Solution
    var isValid = function(s) {
        //note
    //1.create an object
    let validBracket = {
        '(':')',
        '{':'}',
        '[':']'
    }
        //create an array to sort the stack
        let stack =[];
        //loop trought the string s 
        for (let char of s ) {
            // check if validBracket
       if (validBracket[char]){
                //if valid push trought stack
         stack.push(validBracket[char])
         

         } else {
             //if last charactere not equal to char it is false
             if (stack.pop()!== char ) return false
            }
        }
        return (!stack.length)
    }
   