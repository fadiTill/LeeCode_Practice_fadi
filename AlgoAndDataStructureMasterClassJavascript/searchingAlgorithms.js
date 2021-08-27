// Searching Algorithms

//linear Search 
//indexOf
//includes
//find
//finIndex


//pseudocode
//function  2 argument arr and value 
//loop trought the array to check if current element equal to the value 
//if it return the index at witch element is found 
//if value not found return -1

function searchVal(arr, val){
    for (let i = 0; i < arr.length; i++){
      console.log(arr[i])
     if (arr[i] === val){
     return i 
     } 
    }
    return -1
  };
  searchVal([1,2,3],3)

  //Binary search
  
