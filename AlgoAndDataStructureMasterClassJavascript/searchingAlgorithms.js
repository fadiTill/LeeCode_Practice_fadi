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

  //pseudo Code
  //sorted array and val
  function binarySearch(arr, val ) {

    //create left pointer at the start and right pointer at the end of the array.
    var left = 0;
    var right = arr.length - 1;
    //create pointer in the middle 
    var middle = Math.floor((left + right ) / 2 );
    console.log(left, middle, right);
     //while left pointer comes before the right pointer
    while(arr[middle]!== val && left <= right){
      if(val < arr[middle]){
  
        //if the value is too large, move right pointer down
        right = middle - 1;
      } else{
    //if value too small move left pointer up
        left = middle + 1
      }
     middle = Math.floor((left + right) / 2);
     
    }
    // return arr[middle] === val ? middle : -1;
    if(arr[middle] == val){
      return middle;
  
    }
  return -1
}

    binarySearch([2,5,6,9,13,15,28],15)
  //            L     M         R

  //while left pointer comes before the right pointer
  //create pointer in the middle 
  //if you found value return index
  //if value too small move left pointer up
  //if the value is too large, move right pointer down
  //if never find value return -1