var merge = function(nums1, m, nums2, n) {
    //time complexity O(n)
    //space complexity O(1)
   //use  pointers 
  //check if first value grater or not to second value
//update nums1
    //when pointer nums 2 
    let pointer1 = m-1
    let pointer2 = n-1
    let i = m+ n -1 
    
    while(pointer2 >= 0){
        let val1 = nums1[pointer1];
        let val2 = nums2[pointer2];
        
        if(val1 > val2){
            nums1[i] = val1;
            i--;
            pointer1 --;
        }else {
            nums1[i] = val2;
            i--;
           pointer2--;
        }
    }
};


//bubleSorting