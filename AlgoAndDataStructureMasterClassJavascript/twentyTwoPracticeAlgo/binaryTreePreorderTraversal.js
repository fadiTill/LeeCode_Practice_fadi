// 144. Binary Tree Preorder Traversal

// Given the root of a binary tree, return the preorder traversal of its nodes' values.


// ex1
// Input: root = [1,null,2,3]
// Output: [1,2,3]



var preorderTraversal = function(root) {
    if(!root) return [];
    const stack = [root];
    let result = [];
    
    while(stack.length){
        
       let node = stack.pop();
        
        result.push(node.val);
         if(node.right) stack.push(node.right)
         if(node.left) stack.push(node.left)
     }   
    return result
};