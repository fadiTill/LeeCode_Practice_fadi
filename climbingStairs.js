/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // you can use only 1 stairs at the time or 2 or a combinaison of the 2 
    //dynamic programming 
    //recursion 
   // solution 1
//     const number = [1,1,2];
//     for(let i = 3; i<= n; i++){
//         number[i]= [i-1]+number[i-2];
        
//     }
//     return number[n]
    
    
    
    
   // solution 2
    
    let count = function(stairsLeft, result) {
        if(stairsLeft < 0 ){
            return 0;
        }
        if(stairsLeft === 0){
            return 1;
        }
        
        if (result[stairsLeft]){
            return result[stairsLeft];
            
        }
        
     result[stairsLeft] =
        count(stairsLeft-1, result) 
               + count(stairsLeft-2, result);
        
        return result[stairsLeft]
}
    
    return count(n, {});
};