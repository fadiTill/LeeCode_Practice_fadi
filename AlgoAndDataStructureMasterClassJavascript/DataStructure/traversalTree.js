


  //   10
 // 19    6
//99  8    45


//Breath First Search
// -> start at the begining them traverse layers
// DFS   |
//       v


//steps Iteratively


class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;

    }
}

class RegTree{
    constructor(){
   this.root = null;
    }
    bsf(){
 //create a queue and a variable to store the values of nodes visited
 var node = this.root,
   data = [],
   queue = [];
//place the root node in the queue
queue.push(node);
//loop as long as there is anything in the queue
while(queue.length){


//Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
node = queue.shift();
data.push(node.value);
//if ther is a left property on the node dequeued add it to the queue
if(node.left) queue.push(node.left);
//if there is a right property on the node dequeued add it to the queue.
if(node.right) queue.push(node.right);
//return the variable that stores the values.


    }
    return data
}
dsfPreorder(){
//Create a variable to store the values of nodes vsited
var data = [];
//write the root of BST in a variable called current
//write a helper function wich accepts a node 
function traverse(node){
//push the value of the node the variable that stores the values
data.push(node.value);
//if the node has left property, call the helper function with the left property on the node 
if(node.left) traverse(node.left);
//if the node has a right property, call the helper function with the right proprerty on the node 
if(node.right) traverse(node.right);

}
//invoke the helper function with the current variable 
//return the array of values 
traverse(this.root);
return data;

}
dsfPostOrder(){
    //Create a variable to store the values of nodes visited
    var data = [];
    //Store the root of the BST in a variable called current
    //Write a helper function witch accepts a node 
    function traverse(node){
//If the node has a right property, call the helper function with the right property on the node 
  if(node.left) traverse(node.left);
//Push the value of the node to the variable that stores the values

if(node.right) traverse(node.right);
data.push(node.value);
   
    
    //Invoke the helper function with the current variable.
}
traverse(this.root);
return data;

}
dfsInOrder(){
    var data = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node.value);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;

}
}



var tree = new RegTree();