//Push

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

pushDoubly(val){
//Pushing pseudo code
//create a new node with the value passed to the function
var newNode = new Node(val);
//if the head property is null set the head and tail to be the newly created node 
if(this.length === 0){
    this.head = newNode;
    this.tail = newNode;

//if not, set the next property on the tail to be that node 
} else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    //set the previous property on the newly created node to be the tail.
//set the tail property to be the  newly created node 

    

}
//increment the length
//return the Doubly linked list
this.length++;
return this;
}
pop(){
    //if there is no head return undefined 
    if(!this.head) return undefined;
    //store the current tail in a avariable to return later
    var poppedNode = this.tail;
    if (this.length === 1){
    this.head = null;
    this.tail = null;

    //if the length is 1, set the head and tail to be null

     } else {
        //update the tail to be the previous Node.
    this.tail = poppedNode.prev;
    //Set newTail's next to null
    this.tail.next = null;
    poppedNode.prev = null;

      }
      //decrement
      this.length--;
      //return the value removed 
      return poppedNode
  }
  //shift psudocode
 shiftDoubly(){
     // if length is 0, return undefined 
    if (this.length === 0) return undefined;
    //Store the current head property in a varible (oldHead)
    var oldHead = this.head;
    //if the length is one 
    //set the head to be null
   //set the tail to be null
    if(this.length === 1 ){
        this.head = null;
        this.tail = null;
        
    }else {
        //update the head to be the next of the old head 
        
        this.head = oldHead.next;
        //set the head's prev property to null
        this.head.prev = null;
        //set the old head's next to null.
       oldHead.next = null;
    }
        //decrement length
    this.length--
       //return oldhead
    return oldHead;

  }

  unshiftDoubly (val) {
      //create a new node with the value passed to the function
      var newNode = new Node(val);
      //if the length is 0
      if(this.length === 0){
          //set the head to be the new node 
          this.head = newNode;
         //set the tail to be the new node
          this.tail = newNode;
          //Otherwise
      }else {
          // set the prev property on the head of the list to be the new node
          this.head.prev = newNode;
          //set the next property on the new node to be the head property
          newNode.next = this.head;
          this.head = newNode;
    }
    //Update the head to be the new node 
   //Increment the length.

    this.length++;
    return this;
   }
   //Accessing a node in a Doubly Linked List by its position
   getDoubly(index){
       //if the index is less than 0 or greater or equal to the length of the list
    if(index < 0 || index >= this.length)  return null;
    var count, current;
    if(index <= this.length /2){
        console.log("working from start")
        count = 0;
        current = this.head;
        //loop trough the list starting from the head and loop towards the middle 
        while(count !== index){
            current = current.next;
            count++;
        }
    }else{
        //loop trought the list starting from the tail and loop towards the middle 
        console.log("working from end")
        var count = this.length - 1;
        var current = this.tail;
        while(count !== index){
            current = current.prev;
            count--;
        }
    }
    //Return the node once it is found 
    return current;
   }
   setDoubly(index,val){

   }
   //Set PseudoCode 

   set(index, val){
       //create a variable wich is the result of the get method at the index passed to the function
       var foundNode = this.getDoubly(index);
       if (foundNode != null){
        //a valid node set the value of that node to be the value passed to the function
           foundNode.val = val;
           return true;
       }
       return false;
   }
   //Insert
//Adding a node in a 
//Doubly Linked list by a certain position
insertDoubly(index, val){
//if the index is less than zero or greater than or equal to the length return false
if(index < 0 || index >= this.length) return false;
//if the index is 0 unshift
if (index === 0) return !!this.unshiftDoubly(val);
//if the index is the same as the length, push 
if (index === this.length) return this.pushDoubly(val);

var newNode = new Node(val);
//Use the get method to access the index -1 
var beforeNode = !!this.getDoubly(index-1);
//set the next and prev properties on the correct nodes to link everything together
var afterNode = beforeNode.next;

beforeNode.next = newNode;
newNode.prev = beforeNode;
newNode.next = afterNode;
afterNode.prev = newNode;
//            afterNode
          //  |
//a b c Hello D E F
  //  |     |
//beforeNode 
        //   |
        //  newNode 

//Increment the length
//Return true 
this.length++;
return true;
}
//Remove pseudocode
removeDoubly(index){
//if the index is less than zero or greater than or equal to the length return undefined 
if(index < 0 || index >= this.length ) return undefined;

//if the index is 0, shift
if (index ===  0) return this.shiftDoubly();
//if the index is the same as the length-1 pop
if ( index === this.length-1) return this.pop();
//update the next and prev properties to remove the found node from the list
var removeNode  =  this.getDoubly(index);
   removed.next.prev = removeNode.prev;
   //set next and prev to null on the found node
   removed.next = null
   removeNode.prev = null;
   this.length--;
   return removeNode;

//Big O of Doubly list 
//insertion O(1)
//Removal O(1)
//Searching O(N)
//Acces O(N)
//technically searching is O(N/2), but that that still O(N)
//take more memeory


  }
}


list =  new DoublyLinkedList;
console.log(list)
list.pushDoubly("hello")
list.pushDoubly("fadi")
list.pushDoubly("world")
console.log(list)
// list.shiftDoubly()
list.getDoubly(1)


