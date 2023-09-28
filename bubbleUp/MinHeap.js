class MinHeap {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    // methods go here
    add(value) {
        // Add value to end of array
        this.heap.push(value);

        // Increase the heap size
        this.size++;

        // Log a message showing the value added and the current content
        console.log(`Adding value: ${value}`);
        console.log(`Current heap content: ${this.heap}`);

        this.bubbleUp();
    }

    bubbleUp() {
        // Log a message indicating the bubble up process
        console.log('Bubble Up ;)');
    }

}
module.exports = MinHeap;
