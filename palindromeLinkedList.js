var isPalindrome = function(head) {
    //linked list head, val, next
    // palindome if read the same backword and forward 
    //return true || false 
    // compare current linked list to reverse linked list 
    
   //solution
    //use two pointer  fast and slow to found midle of palindrome 
    let fast = head ;
    let slow = head;
    //move fast pointer until end of the list 
    while(fast !== null && fast.next !== null){
        //slow pointer go by 1
        slow = slow.next;
        //fast pointer go by 2 
        fast = fast.next.next;
    }
    
    
   fast = head;
   slow = reverse(slow);
    //them compare first half to second half 
    
    while(slow !== null){
        if(slow.val !==fast.val){
            return false;
        }
        //increment while comparing
        slow = slow.next;
        fast = fast.next;
    }
    
    return true; 
};

let reverse = function(head){
    let prevNode = null
    
    while(head !== null){
        let nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }
    return prevNode; 
}