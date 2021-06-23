// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//  */
  //example 
  //  list = 1 -> 2 -> 3 -> 4 -> 5
  // return 5 -> 4 -> 3 -> 2 -> 1

//   Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

 var reverseList = function(head) {

    let currentNode = head;
    let previousNode = null;
    let nextNode = null;

    //until end of node 
    while(currentNode){
        // pointer to next element before otherwrite it 
        nextNode = currentNode.next;

        //reverse the next pointer
        currentNode.next = previousNode
        // increment in the list 
        previousNode = currentNode;
        currentNode = nextNode;
    }

return previousNode
    
};