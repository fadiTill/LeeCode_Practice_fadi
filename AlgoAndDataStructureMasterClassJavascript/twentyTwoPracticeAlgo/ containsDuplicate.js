var containsDuplicate = function(nums) {
    //     let data = {};
    //     for(let i= 0; i < nums.length; i++){
    //        !data[nums[i]] ? data[nums[i]]= 1 : data[nums[i]]+=1;
    //         console.log(data)
    //     }
    //     for(let keys in data){
    //         console.log(data[keys])
         
    //               if(data[keys] >= 2){
    //             return true  
    //               }
          
    
                
    //         }
            
        
            
       
    //       return false 
        let data = {};
        for(let i= 0 ; i < nums.length; i++){
            if(data[nums[i]] === undefined ){
                data[nums[i]] = 1;
                
                
                
            } else{
               return true  
            }
           
        }
         return false
        
    };