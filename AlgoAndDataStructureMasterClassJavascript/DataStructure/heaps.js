
//MaxBinaryHeap
//parents nodes are always larger tahn child nodes


//MinBinaryHeap
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
      extractMax(){
//removing
      //Swap the first value in the values property with the last one 
      const max = this.values[0];
      //Pop from the values property, so you can return the value at the end
      const end = this.values.pop();
      //your parent index starts at 0(the root)
      this.values[0] = end;

      //Have the new root "sink down" to the correct spot...
      this.sinkDown();
      return max;
      } 
      sinkDown(){
          let idx = 0;
          const length = this.values.length;
          const element = this.values[0];
          while(true){
              let leftChilIdx = 2 * idx + 1;
              let rightChildIdx = 2 * idx + 2;
              let leftchild,rightChild;
              let swap = null;

              if(leftChildIdx < length){
                  leftChild = this.values[leftchildIdx];
                  if(leftChild > element){
                    swap = leftChilIdx;

                  }
              }
              if(rightChildIdx < length){
                  rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftchild)
                ){
                  swap = rightChildIdx;
                }
              }

              if(swap === null) break;
              this.values[idx] = this.values[swap];
              this.values[swap] = element;
              idx = swap;
          }
      }
    
      // find the index of the left child:2 * index+1(make sure its not out of bounds)
      //Find the index of the right child: 2*index+2(make sure its not out of bounds)
      //If the left or right child is greater than the element...swap.If both left and 
      //right children are larger, swap with the larger child.
      //The child index you swapped to now becomes the new parent index.
      //keep looping and swapping until neither child is larger than the element
      //Return the old root!
  
      
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


