// class Node {
//     constructor(){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }

// }

// class binarySearchTree {
//     constructor (){
//         this.root = null;
//     }
//     bsf(){
//         var node = this.root
//         data = [];
//         queue = [];
//         queue.push(node);
//     while(queue.length){
//       node = queue.shift()  
//       data.push(node);
//       if (node.left) queue.push(node.left);
//       if(node.right) queue.push(node.right);
//     }
//     return data
//     }
//     //left then right
//     //root first
//     dfsPreOrder(){
//         var data = [];
//         var current = this.root;
//         function traverse(node){
//             data.push(node.value)
//             if(node.left) traverse(node.left);
//             if(node.right) traverse(node.right);
//         }
//         traverse(current) 
//         return data;

//     }
//     //finish left firts then ri
//     //botom first left then right and root last 
//     dfsPostOrder(){
//        var data = []
//        currentNode = this.root;
//        function traverse(node){
//            if(node.left) dsf(node.left)
//            if(node.right) dsf(node.right)
//            data.push(node.value)

//        }
//        traverse(currentNode)
//        return data; 
//     }

//     dsfInOrder(){
//         data = [];
//         current = this.root;
//        function traverse(node){
//           if(node.left) traverse(node.left)
//           data.push(node.value)
//           if(node.right) traverse(node.right)
//        }
//        traverse(current)
//        return data;
//     }
    
// }


class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

    class Tree {
        constructor(){
            this.root = null;
        }
        bsF(){
            var data = [];
            var queue = [];
            node = this.root;
            queue.push(node);
            while(queue.length){
                node = queue.shift();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            return data 
        }

        dsf(){
            var data = []
            function traverse(node){
                data.push(node.vallue)
                if(node.left) traverse(node.value)
                if(node.right) traverse(node.right)
            }
            traverse(this.root)
        return data;
        }

        
    }


    class Graph{
        constructor(){
            this.adjcenyList = { }
        }
    }