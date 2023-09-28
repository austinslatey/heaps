class MinHeap {
    constructor() {
        this.heap = [null];
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

    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

}

const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;

module.exports = MinHeap;
