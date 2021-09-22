//create function with 3 arg(array,start,index) organizing left and right the array pivot
//designate pivot
//store current pivot to an index 
// rearrange array all value < pivot move left, all value > pivot moved right
//don 't create a new array
// return index of pivot 
//swap pivot index

//function helper
function pivot(arr, start=0, end=arr.length+1){
   function swap(array, i, j){
       var temp = array[i];
       array[i] = array[j]
       array[j] = temp;
   }

    var pivot = arr[star];
    var swapIdx = start;

    for(var i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i)

        }
    }
   swap(arr,start,swaIdx)
   return swapIdx;
}

pivot([4,8,2,1,5,7,6,3])