// 170. Two Sum III - Data structure design

// Design a data structure that accepts a stream of integers and checks if it has a pair of integers that sum up to a particular value.

// Implement the TwoSum class:

// TwoSum() Initializes the TwoSum object, with an empty array initially.
// void add(int number) Adds number to the data structure.
// boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal to value, otherwise, it returns false.
 

// Example 1:

// Input
// ["TwoSum", "add", "add", "add", "find", "find"]
// [[], [1], [3], [5], [4], [7]] Output

 var TwoSum = function() {
    this.data = {}
    
};


TwoSum.prototype.add = function(number) {
    this.data[ number] ?  this.data[number]+=1 : this.data[ number]=1;

}

TwoSum.prototype.find = function(value) {
   for(let nums in this.data){
       // console.log(this.data)
       // console.log(nums)
        let secondNum = value - nums
        if(secondNum  == nums){
            if(this.data[nums] > 1){
                return true 
            }else {
                continue
            }
        } else if (this.data[secondNum ]){
            return true 
        }
   }
    return false 
};


