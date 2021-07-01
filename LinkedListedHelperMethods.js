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
        var newNode = new Node(val)
        if (!this.head){
          this.head = newNode 
          this.tail = this.head
        } else{
          this.tail.next = newNode 
          this.tail = newNode;
        }
        //create a new Node using value passed to the function
        // if empty set head tail are new node 
        //else  next property be new tail and tail new node created 
        //increment lenght
      }
    }
  
  
  // var premier = new Node("Bonjour")
  // premier.next = new Node ("vous")
  // premier.next.next = ("allez")
  // premier.next.next.next = ("bien ?")
  var list = new Singly()
  list.push("Bonjour")
  
   list.push("Aurevoir")