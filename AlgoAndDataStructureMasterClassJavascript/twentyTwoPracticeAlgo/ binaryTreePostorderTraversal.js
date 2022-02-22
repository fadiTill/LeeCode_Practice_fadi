// 145. Binary Tree Postorder Traversal

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

//example 1
// Input: root = [1,null,2,3]
// Output: [3,2,1]


//example 2
// Input: root = []
// Output: []


var postorderTraversal = function(root) {
    if(!root) return [];
        let data = [];
        function traverse(node){
                if(node.left) traverse(node.left)
                if(node.right) traverse(node.right)
                data.push(node.val);
        }
    
        
        traverse(root)
        return data
    };