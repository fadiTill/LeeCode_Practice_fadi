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
    //Unshifting pseudocode
//function accept a value
//create a new node using the value passed to the function
//if there is no head property on the list, set the head and tail to be the newly created node 
//otherwise set the newly created node's next property to be current head property on the list
//set the head property on the list to be that newly created node 
//increment the length of list by 1 
//return the linked list

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
    get(index){
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++
        }
        return current;
    }

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;

    }
    insert(index, val) {
        //if the index is less than zero or greater than the length, return false
        if(index < 0 || index > this.length) return false;
        //if the index is the same as the length, push a new node to the end of the list
        if(index === this.length) return this.push(val);
        //if the index is 0, unshift a new node to the start of the list
        if(index === 0) return this.unshift(val);
        
        
         //set the next property on that node to be the new node
        var newNode = new Node(val);
        //otherwise, using the get method, access the node at the index -1
        var prev = this.get(index - 1);
        //create a temp  variable to place hold the value
        var temp = prev.next
       //set the next property on the new node to be the previous next
        prev.next = newNode;
        //increment the length
        //return true 
        this.length++;
        return true;
    
    }
    
    //Remove 
    //if the index is less than zero or greater than the length, return undefined
    //if the index is the same as the length -1 , pop
    //if the index is 0, shift
    //otherwise, using the get method access the node at the index -1
    //set the next property on that node to be the next of the next node
    //decrement the length
    //return the value of the node removed
    
    remove(index){
        if (index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if (index === this.length-1)return this.pop();
        var newNode = new Node(val);
        var last = this.get(index - 1)
        var temp = last.next;
        last.next = temp.next;
        this.length--;
        return temp
    }
    reverse(){
        //swap the head and tail
        
        
        //Create a variable called node and initialize it to the head property
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        //create a variable called next
        var next;
        //Create  a varaible called prev
        var prev = null;
        //loop trough the list
        for(var i =  0; i < this.length; i++){
            //set next to be the next property on watever node is 
            next = node.next;
            //set the next property on the node variable 
            node.next = prev;
            prev = node;
            //set the node variable to be the value of the next variable
            node = next;

        }
        return this;

    }
}











// first.next.next.next.next = new Node("you")
//Return the value of the node removed.
    
    
    // var first = new Node("Hi")
    // first.next = new Node("there")
    // first.next.next = new Node("how")
    // first.next.next.next = new Node("are")

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
list.get(2)
list.set(1, "Hello")

