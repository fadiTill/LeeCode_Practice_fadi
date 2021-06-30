// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
//3 -> 2 -> 0 -> -4 
//     ^          |
//     |__________|

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


 var hasCycle = function(head) {
    //linked list 
    //return true if pos  or false !pos 
    
    //solution 
   //  use two pointer 
    // head represent the entire linkde list 
    // when two pointer meet pos exit return true 
    
    //set pointer to head 
    let fastPointer = head;
    let slowPointer = head;
     
    //until reach end linked list loop
    while(fastPointer !== null && fastPointer.next !== null){
        // fastpointer goes 2 
        //slowpointer goes by 1 
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    // when they meet 
    if (fastPointer === slowPointer){
        return true;
    }
    }
    // else
    return false;
   
};