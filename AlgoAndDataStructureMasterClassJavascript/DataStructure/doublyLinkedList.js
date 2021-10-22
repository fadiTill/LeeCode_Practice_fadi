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
    this.newNode.prev = this.tail;
    this.tail = newNode;
    //set the previous property on the newly created node to be the tail.
//set the tail property to be the  newly created node 

    

}
//increment the length
//return the Doubly linked list
this.length++;
return this;
}
}
list =  new DoublyLinkedList;
console.log(list)
list.pushDoubly(99)