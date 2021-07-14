// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 

// Example 1:

// Input: x = 4
// Output: 2

//the square root of number is when number multiply byitself equal target value 
//example sqrt(4)
//Binary search
// 1 2  |  3 4
// left and right didvide data 
// mid point is 2 
//if we square 3 it will be greater then target 


var mySqrt = function(x) {
   
    if (x < 2) {
      return x;
    }
  
    let left = 1;
    let right = x;
  
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
  
      if (mid * mid === x) {
        return mid;
      } else if (mid * mid > x) {
        right = mid;
      } else if (mid * mid < x) {
        left = mid + 1;
      }
    }
  
    return left - 1;
  
      
  };
