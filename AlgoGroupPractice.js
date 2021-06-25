class Node {
    constructor(arr){
      this.val = arr[0]
      this.next = arr.length === 1  ? null :  new Node(arr.slice(1, arr.length)) 
    }
  }
  
  class List {
    constructor(arr){
      this.head = new Node(arr)
    }
  }
  
  const test = [1,5,8,10]
  const list = new List(test)
  
  console.log(list.head.val === test[0] ? "Correct :D" : "Try Again :(")
  console.log(list.head.next.val === test[1] ? "Correct :D" : "Try Again :(")
  console.log(list.head.next.next.val === test[2] ? "Correct :D" : "Try Again :(")
  console.log(list.head.next.next.next.val === test[3] ? "Correct :D" : "Try Again :(")
  console.log(list.head.next.next.next.next === null ? "Correct :D" : "Try Again :(")
    
    function practice(list, test){
      let current = list.head.val 
      let posttNode = null;
      let preNode = null;
  
  while(practice){
   return list.head.next
  }
      // console.log(current)
      
  
  
  }
  
  practice(list, test) 
  //console.log(test)
  //console.log(list)
  // console.log(test[0]) 
   //console.log(list.head.val)
  // console.log( test[1])
   //console.log(list.head.next.val)
  // console.log(test[2])
   //console.log(list.head.next.next.val)
  // console.log(test[3])
  // console.log(list.head.next.next.next.val )
   //console.log(list.head.next.next.next.next) 
  // list =  
  //         1 -> 5 -> 8 -> 10
   //        |
  //         H  N V N  V  N  V
  
  
  // //1. Print the list as an object
  // console.log(list)
  
  //2. Add a node at the beginning of the list
  //3. Add a node after a node with a given value
  //4. Reverse the list
  // 5.Create a doubly linked list
  