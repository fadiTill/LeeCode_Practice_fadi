//Merge Sort
// combinaison of merging and sorting
//split into subarray

//Merging Arrays 






function mergeSort(arr1,arr2){
    //create sn empty array, 
    let result = [];
   let  i = 0;
   let  j= 0;
   //while not end of the arrays
   while(i < arr1.length && j < arr2.length){
    //take look at smallest value 
     if( arr1[i] > arr2[j]){
      result.push(arr2[j]);
      j++
     }else{
       result.push(arr1[i]);
       i++
     }
   }
   //we want to push the rest of the array
   while(i < arr1.length){
     result.push(arr1[i]);
     i++
   }
   while(j < arr2.length){
     result.push(arr2[j]);
     j++
   }
    
    
    return result;

  }
  mergeSort([1,2,3,4],[0,6,7,8,99])


  //mergeSort with recur

  function mergeSortB(arr1,arr2){
    //create sn empty array, 
    let result = [];
   let  i = 0;
   let  j= 0;
   //while not end of the arrays
   while(i < arr1.length && j < arr2.length){
    //take look at smallest value 
     if( arr1[i] > arr2[j]){
      result.push(arr2[j]);
      j++
     }else{
       result.push(arr1[i]);
       i++
     }
   }
   //we want to push the rest of the array
   while(i < arr1.length){
     result.push(arr1[i]);
     i++
   }
   while(j < arr2.length){
     result.push(arr2[j]);
     j++
   }
    
    
    return result;

  }
 function mergeSort(arr){
     if(arr.length <= 1) return arr;
     let mid = Math.floor(arr.length/2);
     let left = arr.slice(0, mid);
     let right = arr.slice(mid);
     return mergeSort(left, right)
 }
mergeSort([10,24,76,73])

//0(n log n) time complexity
//space complexity O(n)
  