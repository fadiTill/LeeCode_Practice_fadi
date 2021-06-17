// Given the root node of a binary search tree and two 
//integers low and high, return the sum of values of all nodes with a value 
//in the inclusive range [low, high].

 

// Example 1:


// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

// we sum value that are within the range 7 <= x <= 15, excluding 5,3,and 18

//        10
    //    /\
    //   5  15
    //  /\     \
    //  3 7      18


// Inorder Traversal (Left-Root-Right)
// Preorder Traversal (Root-Left-Right)
// Postorder Traversal (Left-Right-Root)


// BFS and DFSs of above Tree
//     1
//    /\
//   2  3
//  /\
// 4  5

// Breadth First Traversal : 1 2 3 4 5

// Depth First Traversals:
//       Preorder Traversal : 1 2 4 5 3 
//       Inorder Traversal  :  4 2 5 1 3 
//       Postorder Traversal : 4 5 2 3 1



var rangeSumBST = function(root, low, high) {
    // result will be push to an array for now empty
    sum = [];
   // create an helper method for the node 
    function dsf(node){
    //if no node return null
    if(!node) return null;
    //starting by left node 
     dsf(node.left)
    // if the node value is greater or equal to low and smaller or equal to high to be within the range 
    if (node.val >= low  &&  node.val <= high){
        //if withion the range push node.val to sum 
       sum.push(node.val)
    }
     dsf(node.right)
    }
    
     dsf(root)
     console.log(sum)
    
    //return sum by addition node.val 
      return sum.reduce((a,b)=> a+b,0 )
};

