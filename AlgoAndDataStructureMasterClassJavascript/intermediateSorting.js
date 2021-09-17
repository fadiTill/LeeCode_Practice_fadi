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