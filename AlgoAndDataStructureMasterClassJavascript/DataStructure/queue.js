//Queues
//FiFO first in first out
//like a line 
//background task
//uploading
//printing/task processing




//building Queue
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
    
    }



class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }
    //add to the end 
    enqueue(val){
        //this function accepts some value
        //create a new node using that value passed to the function
        //if there are no nodes in the queue, set this node to be first and last property of the queue
        //otherwise, set the next property on the current 
        //last to be that node, then set the last property of the queue to be that node
        var newNode = new Node(val);
        if(!this.first){
        this.first = newNode;
        this.last = newNode;

    } else {
        this.last.next = newNode;
        this.last = newNode;

    }
    return ++this.size;
}
    //remove from the begining
    dequeue(){
        //if there is no first property, just return null
        if(!first) return null;
        //store the first property in a varaible 
        var temp = this.first;
        //see if the first is the same as the last (check if there is only 1 node)
        if (this.first === this.last ) {
            this.last = null;
        }
        this.first = this.first.next;
        //if there is more than 1 node, set the first property to be the next properety of first
        this.size--;
        //decrement the size by 1
        return temp.value;

      }
 }


//Building queue with array 2 ways 
//the issue is reindexing 
var q = [];
q.push(1);
q.push(2);
q.push(3);
//remove from begining 
q.shift()


var q = [];
//add to the end 
q.unshift(1)
q.unshift(2)
q.unshift(3)
//remove from end 
q.pop()

//nq , dq

//Big O queues
//insertion O(1) constant
//Removal O(1)
//Searching O(N)
//searching O(N)
