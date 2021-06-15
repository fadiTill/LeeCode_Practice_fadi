// Merge two sorted linked lists and return it as a sorted list. 
//The list should be made by splicing together the nodes of the first two lists.

//The next() method returns an object with two properties done and value. 
//You can also provide a parameter to the next method to send a value to the generator.
//next(value)
//recursive 

var mergeTwoLists = function(l1, l2) {
// if l1 is null return l2 
if (l1 == null) {
    return l2;

}
// if l2 is null return l1 
if (l2 == null) {
    return l1;
}
// compare the first node if l2 is biger move l2 to the right 
if(l1.val<l2.val){
    l1.next = mergeTwoLists(l1.next, l2);
    return l1 
    // else l1 is greater
} else {
    l2.next =  mergeTwoLists(l1, l2.next);
    return l2;
}
};
