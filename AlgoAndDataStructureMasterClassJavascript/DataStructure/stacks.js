//stacks
function factorial(x){
    if(x === 0) return 1;
    return x * factorial(x-1);
}

factorial(4)

//used
//managing function
//undo/Redo
//Routing(the history object is treated like a stack!

var stack = []
stack.push("will")
stack.push("Alex")
stack.push("mike")
stack.push("fadi")
console.log(stack)
//remove from the end
stack.pop()
//add at the end 
stack.unshift(1)
stack.unshift(2)
stack.unshift(3)
//remove from begining
stack.shift()



var stack = new stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()

//stack class 
class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

}
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }

    //pushing code 
  //the function should accept a value
  //create a new nodes in the stack, set the first and last
    //property to be the newly created node 
//if there is at least one node create a variable that stores the current first property on the stack
//Reset the fisrt property on the node to be the previously created variable
//incerement size by 1 


    pushSatck(val){
        var newNode = new Node(val);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
     return ++this.size;
    }
    
    pop(){
//if there are no noes in the stack, return null;
if(!this.first) return null;
//create a temporary variable to store the first property on the stack
var temp = this.first;
//If there is only 1 node, set the first and last property to be the next proprety on the current first
if(this.first === this.last){
    // this.first = null;
    this.last = null;
}
//if there is more than one node, 
//set the first property to be the next property on the current first

    this.first = this.first.next;

 //Decrement the size by 1
   this.size--;
//return the value of the node removed 
    return temp.value

    }
}

//BIG O i
//insertion and removal 0(1)
//Searching O(N)

//stack are a lifo data structure where the last value in is alway the first one out
//Stacks are used to handle function invocation (the call stack), for operation like undo/redo, and for routing
//(remenber pages you have visited and go back/forward and much more!)
//they are not a built in data structure 