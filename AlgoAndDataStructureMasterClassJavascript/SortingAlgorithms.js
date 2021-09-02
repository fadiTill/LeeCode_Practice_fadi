//sorting


function sort(arr){
    return arr
}
sort([23,45,6,12,13])

//buble sort
//selection sort
//insertion sort


// sort()
//sort order is ascending, built upon converting the elements into strings, 
//then comparing their sequences of UTF-16 code units values.

function numberCompare(num1,num2){
    return num2 - num1;
}
[6,4,15,10].sort(numberCompare);

function compareBylen(str1, str2){
    return str1.length - str2.length;
}

["Fadi","William","Alexander","Mike"].sort(compareBylen);


//Bubble Sort

//swap
//ES5
function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx1] = temp;

}

//ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}


//start looping i the end to the begining
//start inner loop from the begining until i-1
//if arr[j] is greater than arr[j+1], swap those two values!
//Return the sorted array.


function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                //SWAP!
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1]= temp;
            }
        }
    }
    return arr;
}

bubbleSort([37,45,29,8])

//reformat
// don 't go further then 45 
function bubbleSort(arr){
    for(var i = arr.length; i > 0 ; i-- ){
      for(var j = 0; j < i-1; j++ ){
  if(arr[j] > arr[j+1]){
    var temp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp;
     }
    }
  }
  return arr;
  }
  
  bubbleSort([37,45,29,8])