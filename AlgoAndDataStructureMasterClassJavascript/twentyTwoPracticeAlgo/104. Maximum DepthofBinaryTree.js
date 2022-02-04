// 104. Maximum Depth of Binary Tree


// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// example1
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// example2
//Input: root = [1,null,2]
// Output: 2
//solution fail edge case 
var maxDepth = function(root) {
    // dfs 
    // if deph > set to new value 
    // set count ++
    
   if (root == null) {
      return 0;
    } else {
       left_height = maxDepth(root.left);
       right_height = maxDepth(root.right);
      return Math.floor(Math.max(left_height, right_height) + 1);
    }
};