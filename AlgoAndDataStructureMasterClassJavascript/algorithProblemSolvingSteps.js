//devise a plan for solving
//master common problem solving patterns Strategies

// problem solving
//A.understand the problem
//B.explore Concrete Examples
//C.break it down
//D.Solve/Simplify
//E.Look back and refactor 


//1.understand the problem
// reastate the probleme in your own word
// input 
// output 
// do you have enought data to return output 
//terminologie of the data

//Example 1
//Write a function wich takes two numbers and return their sum.

//1.Can I restate the probleme in my own word ?
//"write addition algorithm"

//2. what the input ?
// two number, integer?, float, infinity number? how many numbers?

//3 what output 
//two number, integer?, float, infinity number?.float.float.

//4.Do I have enougth information 
//what if got only one number ?

//5. label data
// add, sum 


//B.explore Concrete Examples
//user storie, Unit test
 //1. start with simple example 
// 2.them progress to more complex 
//Edges cases
//3.Empty inputs 
//4.invalid inputs 

//Example 2
//write a function which  takes in a string and returns counts of each charactere in the string

 charCount("bbbb");//{b:4}
 charCount("bbbb");//{a:0,b:4....}
 charCount("BONJOUR")//{B:1,O:2,N:1,J:1,U:1,R:1}


 //C.break it down
 function charCount(str) {
//return object at the end
var result = {}
 //loop trought string for each character..
 for (var i = 0; i < str.length; i++){
     var char = str[i].toLowerCase
      //if char present add 1 to count
     if(result[char] > 0) {
   result[char]++;
 }
//if not there add 1
else {
    result[char] = 1;
};


 //if  special character do nothing 
}
return result;
}