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

//start looping i the end to the begining
//start inner loop from the begining until i-1
//if arr[j] is greater than arr[j+1], swap those two values!
//Return the sorted array.


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



  function bubbleSortTwo (arr) {
      const swap = (arr, idx1, idx2) => {
          [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
      };
      for (let i = arr.length; i > 0; i--){
          for (let j = 0; j < i-1; j++){
              if(arr[j] > arr[j+1]){
                  swap(arr,j,j+1);
              }
          }
      }
      return arr;
  }

  bubbleSortTwo([37,45,29,8])


  //optimization if data almost sorted
  //stop sorted if no swap
  //0(n)
  function bubbleSortTree (arr) {
      var noSwaps;
    for( i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps)break;
    }
    return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

//time complexity in general is 0(n2) because of nested loop



//Selection Sort

//place small values into sorted position.
//make a variable to store min value 
//compare to the next item  until found smaller num
//if  small num found set to be new min and iterate until end of array.
//if minim is not index you start with  swap the two values.


function selectionSort (arr){
    for (var i = 0; i < arr.length; i++){
      var min = i;
      for (var j = i+1; j < arr.length; j++ ){
        if (arr[j] < arr[min]){
          min = j;
        }
      }
      // if (i !== min){
        // console.log("******")
        // console.log(arr)
        // console.log("Swaping")
        console.log(i,min)
      var temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
      // }
      
    }
    return arr;
  }
  
  selectionSort([0,2,34,22,10,19,17])
//[34,22,10,19,17]
//i,j,min
//0,1,1
//0,2,2
//0,3,2
//0,4,2

//ES615
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]]= [arr[idx2],arr[idx1]])
  
    for(let i = 0; i < arr.length; i++){
      let min = i;
      for (let j = i+1; j < arr.length; j++){
        if(arr[min]> arr[j]){
        min = j;
      }
    }
    if (i!== min) swap(arr,i,min);
  }
  return arr;
  }
   selectionSort([0,2,34,22,10,19,17])

   //time complexity O(n^2)


   //Insertion Sort
   
   
   

   function insertionSort(arr){
       //start by taking the second element in the array
       for (var i = 1; i < arr.length; i++){
           var currentVal = arr[i];
           //compare the second element with the one before 
           for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
           }
   //continue to the next element and if it is incorrect order itereate trough the sorted  portion
   //Reapeat until the array is sorted.
           arr[j+1] = currentVal;
       }
       return arr;
   }
   insertionSort([2,1,9,76,4])