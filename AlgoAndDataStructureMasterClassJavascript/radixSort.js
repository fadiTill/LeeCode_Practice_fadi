//Comparaison Sorts

//Bubble Sort O(n^2)
//Insertion Sort O(n^2)
//Selection Sort O(n^2)
//Quick Sort O(n log (n))
//Merge Sort O(n log(n))


//Radix Sort
//function helper
   //get digit(num, place) return the digit in mum at given place value.
   function getDigit(num, i){
       return Math.floor(Math.abs(num)/ Math.pow(10, i)) % 10;
   }

   // digitCount(num) return s number of digits
   //log 10

   function digitCount(num){
       if(num === 0) return 1;
       return Math.floor(Math.log10(Math.abs(num))) + 1;
   }
 digitCount(423)

 function mostDigits(nums){
     let maxDigits = 0;
     for (let i = 0; i < nums.length; i++) {
         maxDigits = Math.max(maxDigits, digitCount(nums[i]));

     }
     return maxDigits;
 }

//  mostDigits([1,2,45,1000])
function radixSort(nums){
    let maxDigitsCount = mostDigits(nums);
    for(let k = 0; k < maxDigitsCount; k++){
        let digitBuckets = Array.from({length: 10}, ()=>[]);
        for(let i =  0;  i< nums.length; i++)
    }
    // console.log(maxDigitsCount)
}
radixSort([23,345,5467,12,2345,9852])