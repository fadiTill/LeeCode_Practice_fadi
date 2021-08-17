class Node{
    constructor(val){
       this.val = val; 
       this.next = null;
    }
  }
    class Singly{
      constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
  
      push(val){
        //accepte a value
         //create a new Node using value passed to the function
        var newNode = new Node(val);
        // if empty set head tail are new node 
        if (!this.head){
          this.head = newNode 
          this.tail = this.head
          //else  next property be new tail and tail new node created 
        } else{
          this.tail.next = newNode; 
          this.tail = newNode;
        }
        //increment length
      
        this.length++;
        return this;
       
        
      }
  
      //def function if empty return undefined 
      pop(){
        if(!this.head) return undefined;
       var  current = this.head;
       var nTail = current;
       while(current.next){
         nTail = current;
         current = current.next;
   }
  
        this.tail = nTail;
        this.tail.next = null;
        this.length--;
        if(this.length ===0){
          this.head = null;
          this.tail = null;
        }
        return current 
        }
      }
        // while(current){
        //   current = current.next;
        //   current.next.next = null
        //   curent.next.next = tail
        //   this.lenght--
        //   return current.val 
       
      //loop until you reach the tail 
      //set property of 2nd to last node to be null
      // set tail to be 2nd last node 
      // decrement lenght by 1 
      //return value of node remove 
  
      // loop(){
      //   var current = this.head;
      //   while(current){
      //     console.log(current.val);
      //     current = current.next;
      //   }
    //   }
    // }
  
  
  // var premier = new Node("Bonjour")
  // premier.next = new Node ("vous")
  // premier.next.next = ("allez")
  // premier.next.next.next = ("bien ?")
  var list = new Singly()
   list.push("Bonjour")
    list.push("Aurevoir")
     list.push("hello")
    console.log(list)
  
   
  
    list.pop()
    console.log(list.length)