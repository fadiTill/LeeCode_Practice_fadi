
// 160. Intersection of Two Linked Lists
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:

// ex1
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'


var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB){
        return null;
    }
        let nodeHeadA = headA;
        let nodeHeadB = headB;
        
        while (nodeHeadA !== nodeHeadB){
            nodeHeadA = nodeHeadA.next;
             nodeHeadB = nodeHeadB.next;
            
            if(nodeHeadA === nodeHeadB){
               return nodeHeadA
               
            
        }
        if (nodeHeadA === null) {
            nodeHeadA  =  headB;
            
        }
            if (nodeHeadB === null) {
            nodeHeadB  =  headA;
            
        }
        
    }
        return nodeHeadA
    
};