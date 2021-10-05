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
        } else{
            this.tail.next = newNode
            this.tail = newNode;
        }
        //increment the length by one
        this.length++;
        return this;

    }
}



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

