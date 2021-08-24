//Frequency Counter

//write a function called same, wich acceps two arrays.
//Thefunction should return true if every value in the array has it 's corresponding value squared in the second
//array.The frequency of values must be the same.

//example
same([1,2,3],[4,1,9])// true
same([1,2,3],[1,9])//false 

//brut force solution
//time complexity n^2

function same(arr1, arra2){
    if(arr1.length !== arra2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        //The indexOf() (loop trought the array)
        // The indexOf() method returns the first index at which a 
        // given element can be found in the array, or -1 if it is not present.
        let correctIndex = arra2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        // splice(start, deleteCount)
        arra2.splice(correctIndex, 1)
    }
    return true
}

//refactored 
//time complexity O(n)
function same(arra1, arra2){
    if(arra1.length !== arra2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arra2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if (!(key ** 2 in frequencyCounter2)){
            return false 
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
//Anagrams 
//Given two strings, write a function to determine if the second string is an anagram of the first
//An Anagram is a word, phrase or name formed by rearranging the letters of anaother, such as cinema,
//formed from iceman

//examples
validAnagram('', '')//true
validAnagram('aaz', 'zza')//false 
validAnagram('anagram', 'nagaram')//true

//I need to split the string into individual caracters
//loop trought the fisrt string 
//loop trought the second string 
//compare each charactere and ocurrence in second string 


//Brut Force solution
function validAnagram(string1,string2){
    //split into manageable charactere
     string1 = string1.split('')
     string2 = string2.split('')

    if(string1.length !== string2.length){
       return false;
    }
        //loop trough string 1
    for(let i = 0; i < string1.length; i++){
     let correctIndex = string2.indexOf(string1[i])
     if (correctIndex === -1) {
              return false;
          }
    // console.log(string1[i])
  // return string1;
     string2.splice(correctIndex, 1)
      }
      return true
  }
   console.log(validAnagram("hello","llohe"))


  
//Refactored
//Build first object with value = to count
//them compare to string2 and remove if not present return false 
function validAnagram(string1, string2){
    if(string1.length !== string2.length){
        return false;
     }
     const lookup = {};

     for(let i = 0; i < string1.length; i++){
         let letter = string1[i];
         //if letter exists, increament, otherwise set to 1 
         lookup[letter] ? lookup[letter] +=1 :lookup[letter] = 1;
}
for(let i = 0; i < string2.length; i++){
    let letter = string2[i];
    //can 't find letter or letter is zero then it 's not an anagram 
    if(!lookup[letter]){
        return false;
    }else {
        lookup[letter] -=1;
        //0 is falsy
    }
  }
  return true;
}

//Multiple Pointers

// Write a function called sumZero wich accepts a sorted array of integers.
//The function should find the first pair
//were the sum is O. Return an array that inckudes both value that sum to zero or undefined if a pair
//does not exits.

//Brut force O(n^2)
function sumZero(arr){
    for(let i = 0; i < arr.length; i++ ){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
      
     }
   }
  }
}
console.log(sumZero([-3,-2,-1,0,1,2,3]))


//Refactor 
//O(n)
function sumZero(arr){
    let left = 0;
    let right = arr.length -1;
while(left < right){
    let sum = arr[left]+ arr[right];
    if(sum === 0){
        return [arr[left], arr[right]];
    } else if(sum > 0){
        right--;
    } else {
        left++
    }
  }
}

//multiple pointers: count unique value
//Implement a function called countUniqueValues, wich accepts a sorted array, and counts the 
//unique values in the array. There can be negative  numbers in the array, but it will be sorted.

//Example 
 countUniqueValues([1,1,1,1,1,2]) //2
 countUniqueValues([]) //0

 //brut force 0(n)
 //1 loop
 function countUniqueValues(arr){
    if( arr.length === 0){
   return 0
    }
    var i = 0;
     for(var j = 1; j < arr.length; j++){
     if(arr[i]!== arr[j]){
       i++;
       arr[i] = arr[j]
      }
     }
    return i+1
  }
   countUniqueValues([[1,1,1,1,1,2]])

//Sliding Window 
//create a window number or array from one position
// window will increase or closes 
// great way to track subset of data 

//write a function maxSubbaraySum wich accepts an array of integers and number called n.
//The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2) //10
maxSubarraySum([],4) // null

//Brut force
function maxSubarraySum(arr,num){
    if(num > arr.length){
        return null;
    }
    var max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i+j];
        }
        if (temp > max){
            max = temp;
        }
        console.log(temp,max)
    }
    return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)