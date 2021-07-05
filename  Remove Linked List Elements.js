//203.Remove Linked List Elements
//Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, 
//and return the new head.

//check if head is empty

var removeElements = function(head, val) {
    
     
     //check if head is empty
     if(head=== null) return null;
     let currentVal = new ListNode(-1)
      currentVal.next = head;
     head = currentVal;
     while(currentVal.next !==null) {
         if(currentVal.next.val === val){
             currentVal.next = currentVal.next.next;
         }else{
               currentVal = currentVal.next; 
         }
     }
     return head.next
 };