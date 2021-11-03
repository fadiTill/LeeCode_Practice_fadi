
//MaxBinaryHeap
//parents nodes are always larger tahn child nodes


//MinBanaryHeap
//parent nodes are always smaller than child nodes.
class MaxBinaryHeap {
    constructor(){
    this.values =[];
    }
   
//Buble up:
  
 //Create a variable called parentIndex wich is the floor of (index-1)/2
 
   
    insert(element){
         //Push the value into the values property on the heap 
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        //Create a variable called index wich is length of the values property -1 
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0){
//keep looping as long as the values element at the parentIndex is less than the values
 //element at the child index
        let parentIdx = Math.floor((idx -1)/2);
        let parent = this.values[parentIdx];
        if(element <= parent) break;
        //Swap the value of the values element at the parentIndex with the value of the element 
         // property at the child index 
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        //Set the index to be the parentIndex, and start over!
        idx = parentIdx;

      }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(42);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
//Insert Pseudocode 
