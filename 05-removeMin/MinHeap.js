class MinHeap {
    constructor() {
      this.heap = [ null ];
      this.size = 0;
    }
  
    add(value) {
      console.log(`.. adding ${value}`);
      this.heap.push(value);
      this.size++;
      this.bubbleUp();
      console.log(`added ${value} to heap`, this.heap);
    }
  
    bubbleUp() {
      let current = this.size;
      while (current > 1 && this.heap[getParent(current)] > this.heap[current]) {
        console.log('..', this.heap);
        console.log(`.. swap index ${current} with ${getParent(current)}`);
        this.swap(current, getParent(current));
        current = getParent(current);
      }
    }

    popMin() {
      if (this.size === 0) {
        return null;
      }
    
      // Swap the last element with the minimum element at index 1
      console.log(`Swapping ${this.heap[1]} with ${this.heap[this.size]}`);
      this.swap(1, this.size);
    
      // Remove the last element and decrement the size
      const min = this.heap.pop();
      this.size--;
    
      // Display the message and updated heap
      console.log(`Removed minimum element: ${min}`);
      console.log('Updated heap:', this.heap);
    
      return min;
    }
  
    swap(a, b) {
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
  
  }
  
  const getParent = current => Math.floor((current / 2));
  const getLeft = current => current * 2;
  const getRight = current => current * 2 + 1;
  
  module.exports = MinHeap;
  