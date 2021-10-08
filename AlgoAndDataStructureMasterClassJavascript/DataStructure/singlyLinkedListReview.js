//Linked list 
//data structure contain head, tail and length properety 
//linked listconsist of nodes and each node has a value and a pointer to anaother node or null

//Singly list
//head->node->tail->null

// no random acces but faster insertion and deletion 

//piece of data - val
//reference to next node - next

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;

    }
   

    push(val){
       // create a new node using the value passed to the function

        var newNode = new Node(val);
        //If there is no head property on the list, set the head and tail to be newly created node
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
           // Otherwise set the next property on the list to be the newly created node.
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //increment the length by one
        this.length++;
        return this;

    }


    pop(){
        //def  return indefined 
       if(!this.head) return indefined;
       var current = this.head;
       var newTail = current;
       //loop trought the list until you reach the tail 
       //set the tail to be the 2nd to last node 
       while(current.next){
           newTail = current;
           current = current.next;
       }
       this.tail = newTail;
       this.tail.next = null;
       //Decrement the length of the list by 1 
       this.length--;
       //when we reach the end of the list to avoid going into negatif numbers
       if(this.length === 0){
           this.head = null;
           this.tail = null;

       }
       return current;
    }
    shift(){
        //if there are no nodes, return undefined
        if(!this.head) return undefined
        //store the current head property in a variable 
         var currentHead = this.head;
         //set the head property to the current head's next property
         this.head = currentHead.next;
         //Decrement the length by 1
         this.length--;
         if(this.length === 0){
             this.tail = null;

         }
         return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

}


//Unshifting pseudocode
//function accept a value
//create a new node using the value passed to the function
//if there is no head property on the list, set the head and tail to be the newly created node 
//otherwise set the newly created node's next property to be current head property on the list
//set the head property on the list to be that newly created node 
//increment the length of list by 1 
//return the linked list



//Return the value of the node removed.


// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
console.log(list)
 list.push("Goodbye")
 console.log(list)
 list.push("bonjour")
 console.log(list)
 list.pop()
// console.log(list)
// list.pop()
//  console.log(list)
//   list.pop()
//   console.log(list)
list.unshift("yay")
console.log(list)

