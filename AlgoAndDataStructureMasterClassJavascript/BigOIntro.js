//BiG O time complexity


//  linear O(n)
function addUp(n){
    let solution = 0
    for(let i = 1; i <= n; i++  ){
      solution +=i;    
    }
    return solution;
  }
  
  console.log(addUp(6))

//constant O(1)
  function addUpBis(n){
    return n * (n + 1) / 2
 }
 console.log(addUpBis(5))

 //linear  (f(n) = n) 
 //Quadratic (f(n) = n^2)
 //Constant (f(n) = 1)


 //Quadratic O(n^2)
 function printPairs(n){
     for(var i = 0; i< n; i++){
         for(var j = 0; j < n; j++){
          console.log(i, j);   
         }
     }
 }
 console.log(printPairs(2))

 // Aritmetic operations are constant
 // variables assignement is constant 
 // Accessing elements in an array (by index) or object(by key ) is constant
 // In the loop, the complexity of the loop times the complexity of what happens inside of the loop


 //console.log(Math.max(1, 3, 2));
// expected output: 3

// const array1 = [1, 3, 2];

// console.log(Math.max(...array1));
// expected output: 3

//Linear O(n)
function logMin(n){
    for(var i = 1; i <= Math.max(5, n); i++ ){
      console.log(i)
    }
  }
  console.log(logMax(6))


//   console.log(Math.min(2, 3, 1));
// expected output: 1

// const array1 = [2, 3, 1];

// console.log(Math.min(...array1));
// expected output: 1

//constant O(1)
  function logMax(n){
    for(var i = 1; i <= Math.min(5, n); i++ ){
      console.log(i)
    }
  }
  console.log(logMax(6))

//BiG O Space complexity

//Most primitives(booleans, numbers, undefined, null) are constant
//Strings require O(n) space (where n is the string length)
//Reference types are generally 0(n), where n is the length(for arrays)or number of keys(for objects)


//Constant space O(1)
function add(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}

console.log(add([1,2,3]))


function double(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i]);
    }
   return newArr
}

console.log(double([1,2,3]))


//Logarithms

//O(log n)
//logarithm of a num measures the number of times you can divide that number by 2 
//before the value that 's less than or equal to one.