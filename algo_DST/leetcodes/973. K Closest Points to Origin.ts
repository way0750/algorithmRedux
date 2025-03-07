class Heap {
    constructor(isMinHeap = true) {
        this.heap = [];
        this.isMinHeap = isMinHeap;
    }

    compare(a, b) {
        return this.isMinHeap ? a.val - b.val : b.val - a.val;
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


var kClosest = function(points, k) {
    const maxHeap = new Heap(false);
    for (let [x, y] of points) {
        const h = Math.sqrt(x**2 + y**2);
        maxHeap.insert({ val: h, point: [x, y] });
        while (maxHeap.size() > k) maxHeap.extract();
    }
    const ans = [];
    while (maxHeap.size()) {
        const { point } = maxHeap.extract();
        ans.push(point);
    }
    return ans;
};