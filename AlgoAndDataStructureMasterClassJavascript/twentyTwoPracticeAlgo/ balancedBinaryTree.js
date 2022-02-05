// 110. Balanced Binary Tree


// solution fail egde case
var isBalanced = function(root) {
    if(root === null){
        return true
    }
    return height(root)
}
    let height = function(node){
        if(node === null){
            return true
        }
    
    
    let left = height(node.left)
    let right = height(node.right)
    
    
    if(Math.abs(height(node.left) - height(node.right)) > 1){
        return false 
    }else {
         return isBalanced(node.left) && isBalanced(node.right)
    }

    
 };


// var isBalanced = function(root) {
//     if(root === null){
//         return true;
//     }
//     return height(root) !==-1;
// }

// let height = function(node){
//     if(node === null){
//         return 0;
//     }
//     let left = height(node.left);
//     let right = height(node.right);
    
//     if(left === -1 || right===-1 || Math.abs(left-right) >1 ){
//         return -1;
//     }
//     return Math.max(left, right)+1 ;
// }
