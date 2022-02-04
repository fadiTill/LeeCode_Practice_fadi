// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 //example1 Input: root = [1,2,2,3,4,4,3]
// Output: true

//exmaple 2 
// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */

//traverse tree left and right side compare each l and R child if equal true else false 


// Solution traverse tree left and right side compare each l and R child if equal true else false 


var isSymmetric = function(root) {
    
            return isMirror(root.left, root.right);
    }
    
    function isMirror( t1,  t2) {
        if (t1 == null && t2 == null) return true;
        if (t1 == null || t2 == null) return false;
        return (t1.val == t2.val)
            && isMirror(t1.right, t2.left)
            && isMirror(t1.left, t2.right);
        
        
    };
    