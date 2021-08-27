//recusion 

//function calls itself and need an end point to avoid "infinit loop"
//stack, when remove from on top


function takeShower(){
    return "Showering!"
  }
  
  function eatBreackfast(){
    let meal = cookFood()
    return `Eating ${meal}`
  }
  
  function cookFood(){
    let items = ["Oatmeal","Eggs","Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
  }
  
  function wakeUp(){
    takeShower()
    eatBreackfast()
    console.log("Ok ready to go work!")
  }
  wakeUp()

  //2 part
  
  //different input 
  function countDown(num){
      //Base Case
    if(num <= 0){
      console.log("All done!");
      //stop
      return;
    }
    console.log(num);
    num--;
    countDown(num);
  }
  countDown(5)
  //print 3
  //countDown(2)
  //print 2
  //countdown(1)
  //print 1
  //countdown(0)
  //print "All Done"

  //SumRange 

  function sumRange(num){
      if( num === 1) return 1;
      return num + sumRange(num-1);
  }
   sumRange(3)
   // return 3 + sumRange(2)
   //        return 2 + sumRange(1)
  //                         return 1

//   function factorial(num){
//       let total = 1;
//       for(let i = num; i > 0; i--){
//        total *= i   
//       }
//       return total;
//   }

  function factorial(num){
      if(num === 1) return 1;
      return num * factorial(num - 1 );
  }
  factorial(5);

  //Recusrion Problem 
  //no base case
  //return the wrong thing
  //stack overflow

//helper method recursion

//Example collecting odd values in an array

function collectOddValues(arr){

    let result = []

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }  

helper(arr)

return result;
}


//pure Recussion

function OddValues(arr) {
  let newArr = [];

  if(arr.length === 0) {
    return newArr;
  }
  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(OddValues(arr.slice(1)));
  return newArr;
}

OddValues([1,2,3,4,5])

//OddValues STACK

//OddValues([1,2,3,4,5])
//[1].concat(OddValues([2,3,4,5]))
          //[].concat(OddValues([3,4,5]))
                   //[3].concat(OddValues([4,5]))
                        //[].concat(OddValues([5]))
                              //[5].concat(OddValues([]]))
                                  // []