/*

1,2,3,4,5,6
4,6,2,3,5,1

max heap top node should be smaller than min heap top node
when comes to adding
    add to the one with smaller size
    else just add to max heap
BUT
    always compare the top nodes of two heaps
    if max heap > min heap, swap nodes
        until max heap <= min heap
left half: max heap
2 1 3
right half: min heap
6 5 4

*/

class Heap {
    constructor(isMinHeap = true) {
        this.heap = [];
        this.isMinHeap = isMinHeap;
    }

    compare(a, b) {
        return this.isMinHeap ? a - b : b - a;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[parentIndex], this.heap[index]) <= 0) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    extract() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return root;
    }

    bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallestOrLargest = index;

            if (left < length && this.compare(this.heap[smallestOrLargest], this.heap[left]) > 0) {
                smallestOrLargest = left;
            }
            if (right < length && this.compare(this.heap[smallestOrLargest], this.heap[right]) > 0) {
                smallestOrLargest = right;
            }
            if (smallestOrLargest === index) break;

            this.swap(index, smallestOrLargest);
            index = smallestOrLargest;
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }
}

var MedianFinder = function() {
    this.minHeap = new Heap(true);
    this.maxHeap = new Heap(false);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const max = this.maxHeap;
    const min = this.minHeap;
    if (max.size() === min.size()|| max.size() < min.size()) {
        max.insert(num);
    } else {
        min.insert(num);
    }
    while (max.size() && min.size() && max.peek() > min.peek()) {
        const fromMax = max.extract();
        const fromMin = min.extract();
        max.insert(fromMin);
        min.insert(fromMax);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const max = this.maxHeap;
    const min = this.minHeap;
    if (max.size() === min.size()) {
        const ans = (max.peek() + min.peek()) / 2;
        return ans;
    } else {
        return max.size() > min.size() ? max.peek() : min.peek();
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */