class Node {
    constructor(arr){
      if(arr.length > 0){
        this.val = arr[0]
        this.next = arr.length === 1  ? null :  new Node(arr.slice(1, arr.length))
      } else {
        this.next = null
      }
    }
  }
  
  class List {
    constructor(arr){
      this.head = new Node(arr)
    }
     //addNodeAfter() {
    //   let current = this.head;
    //   this.head.next.val = 13
      // console.log(this.head)
   
    }
  //}
  //  let listTest = new List(13);
  //  listTest.addNodeAfter();
  
  
  const test = [1,5,8,10]
  const list = new List(test)
  
  console.log(list.head.val === test[0] ? "Correct :D" : "Try Again :(")
  console.log(list.head.next.val === test[1] ? "Correct :D" : "Try Again :(")
  console.log(list.head.next.next.val === test[2] ? "Correct :D" : "Try Again :(")
  console.log(list.head.next.next.next.val === test[3] ? "Correct :D" : "Try Again :(")
  console.log(list.head.next.next.next.next === null ? "Correct :D" : "Try Again :(")
  
  
  //1. Print the list as an object
  //2. Add a node at the beginning of the list
  //3. Add a node after a node with a given value
  //4. Reverse the list
  // 5.Create a doubly linked list
  
  
  //1. Print the list as an object
    function printList(list, test){
       console.log(list.head)
    }
  
  //  printList(list,test)
  
  //2. Add a node at the beginning of the list
   function  addNodeFirst(list, test){
     let current = list.head
     list.head.val = 12
     console.log(current)
     
     
   }
   addNodeFirst(list, test)
  
   //3. Add a node after a node with a given value
  
   function addNodeAfter(list, test){
    let currentNode = list.head
    list.head.next.val = 13
    console.log(currentNode)
      
       
   }
   addNodeAfter(list, test)
  
  
   //4. Reverse the list
  
   function reverseList(list,test){
     let currentList = list.head
     let postNode = 0;
     let preNode = 0;
     while( currentList ){
   postNode = currentList.next;
   currentList.next = preNode;
   preNode = currentList; 
   currentList = postNode; 
     }
  return preNode 
   }
  reverseList(list,test)