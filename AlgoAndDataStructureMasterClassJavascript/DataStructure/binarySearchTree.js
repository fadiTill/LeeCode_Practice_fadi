//Tree
//a data structure thst consist of nodes in a parent/child relationship

//root the top node in a tree
//child a node directly connected to another node when moving away from root
//parent the converse notion of child 
//siblings a group of nodes with the same parent 
//leaf a node with no children
//Edge the connection between one node and another


//application 
//HTML DOM
//Network routing
//abstract syntax tree
//Artificial intelligence(decision tree)
//folder model
//json

//kinds of trees
//Binary search  trees (BST)

    //          10
   //         /    \ 
   //       6      15
   //       / \      \
   //      3   8       20


   //Every parent node has at most two children
   //evrey node the left of a parent node is always less than the parent
   //every node to the right of the parent node is always greater than the parent

   class BinarySearchTree {
       constructor() {
           this.root = null;
       }

   }
   class Node {
       constructor(){
           this.val = val;
           this.left = null;
           this.right = null;

       }
   }

   var tree = new BinarySearchTree()
   tree.root = new Node(10);
   tree.root.left = new Node(15);
   tree.root.right = new Node(7);
   tree.root.left.right = new Node(9);


   //create a new node 
   //starting at the root
     //check if there is a root, if not the root now becomes that new node!
     //if there is a root, check if the value of the new node is greater than or less
     //than the value of the root
   //if it is greater
     //check to see if there is a node to the right
     //if there is, move to that node and repeat these steps 
     //if there is not, add that node as the right property
//if it is less
    //Check to see if there is a node to the left
    //if there is move that node and repeat these steps
    //if there is not, add that node as the left property
    //return the tree


    

       
            //create a new node 
          
   //starting at the root

          //check if there is a root, if not the root now becomes that new node!
          //if there is a root, check if the value of the new node is greater than or less

     //than the value of the root
   //if it is greater
     //check to see if there is a node to the right
     //if there is, move to that node and repeat these steps 
     //if there is not, add that node as the right property
//if it is less
    //Check to see if there is a node to the left
    //if there is move that node and repeat these steps
    //if there is not, add that node as the left property
    //return the tree
    class Node {
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
    
    class BinarySearchTree {
        constructor(){
            this.root = null;
        }
        insert(value){
            var newNode = new Node(value);
            if(this.root === null){
                this.root = newNode;
                return this;
            }
            var current = this.root;
            while(true){
                //avoid duplicate
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } 
                    current = current.right;
                }
            }
        }
        // Finding a Node in BST

   //start at the root
   //check if there is a root, if not we're done searching !
   //if there is a root, check if the value of the new node is the value we are looking for if we found 
   //it we're done!
   //if it is greater 
   //check to seee if there is a node to the right 
   //if there is move to that node and repeat these steps 
   //if there is not we're done searching!
   //if it is less 
   //check to see if there is a node to the left 
   //if there is move that node and repeat these steps 
   //if there is not we're done 
    find(value){
        if(this.root === null) return false;
        var current = this.root, found = false;
        while(current && !found ){
            if (value < current.value){
                current = current.left;
            }else if(value > current.value) {
                current = current.right;

            }else {
                found = true;
            }
        }
if(!found) return undefined;
return current;
    }
    }
    
    
    //      10
    //   5     13
    // 2  7  11  16
    
    var tree = new BinarySearchTree();
    tree.insert(10)
     tree.insert(5)
     tree.insert(13)
     tree.insert(11)
     tree.insert(2)
     tree.insert(16)
     tree.insert(7)
    tree.find(10)
    
   
   //Big 0 insert as tree grows increase by 1 
   //O log(n)


