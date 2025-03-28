class MaxSpeedHeap {
    constructor(maxSize) {
        this.heap = [];
        this.maxSize = maxSize;
    }

    // Swap two elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Get parent index
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    // Get left child index
    leftChild(index) {
        return 2 * index + 1;
    }

    // Get right child index
    rightChild(index) {
        return 2 * index + 2;
    }

    // Heapify up after insertion
    heapifyUp(index) {
        while (index > 0 && this.heap[this.parent(index)] < this.heap[index]) {
            const parentIndex = this.parent(index);
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    // Heapify down after removal
    heapifyDown(index) {
        const lastIndex = this.heap.length - 1;
        
        while (true) {
            const leftChildIndex = this.leftChild(index);
            const rightChildIndex = this.rightChild(index);
            let largestIndex = index;

            // Check left child
            if (leftChildIndex <= lastIndex && 
                this.heap[leftChildIndex] > this.heap[largestIndex]) {
                largestIndex = leftChildIndex;
            }

            // Check right child
            if (rightChildIndex <= lastIndex && 
                this.heap[rightChildIndex] > this.heap[largestIndex]) {
                largestIndex = rightChildIndex;
            }

            // If no swap needed, we're done
            if (largestIndex === index) break;

            // Swap and continue down the heap
            this.swap(index, largestIndex);
            index = largestIndex;
        }
    }

    // Insert a new value
    insert(value) {
        // Insert the new value
        this.heap.push(value);
        
        // Heapify up
        this.heapifyUp(this.heap.length - 1);

        // Remove smallest elements if heap exceeds max size
        while (this.heap.length > this.maxSize) {
            this.removeSmallest();
        }
    }

    // Remove and return the maximum value (root)
    extractMax() {
        if (this.heap.length === 0) return null;

        // Swap root with last element
        const max = this.heap[0];
        const lastElement = this.heap.pop();

        // If heap is not empty, put last element at root and heapify down
        if (this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.heapifyDown(0);
        }

        return max;
    }

    // Remove the smallest element
    removeSmallest() {
        if (this.heap.length === 0) return null;

        // Find index of smallest element
        const smallestIndex = this.findSmallestIndex();
        
        // Remove the smallest element
        const smallest = this.heap[smallestIndex];
        this.heap.splice(smallestIndex, 1);

        // Restore heap property if needed
        if (smallestIndex < this.heap.length) {
            this.heapifyDown(smallestIndex);
        }

        return smallest;
    }

    // Find index of smallest element
    findSmallestIndex() {
        if (this.heap.length === 0) return -1;
        
        let smallestIndex = 0;
        for (let i = 1; i < this.heap.length; i++) {
            if (this.heap[i] < this.heap[smallestIndex]) {
                smallestIndex = i;
            }
        }
        return smallestIndex;
    }

    // Peek at the maximum value without removing
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // Get current heap size
    size() {
        return this.heap.length;
    }

    // Get the entire heap
    getHeap() {
        return [...this.heap];
    }
}

// Example usage
// const maxSpeedHeap = new MaxSpeedHeap(5);
/**
 * @param {number[][]} grid
 * @return {number[]}
 from each pos, get the largest possible sum (since it's all positive numbers)?
    how to get the largest square:
        get the side first:
        Min of:
            left, right, bottom
            left: index
            right: length - index - 1
            bottom: height(length) - row index - 1;
                then floor(/2)
        so ex 1, at 0:2 it would be, 2, 2, (4/2):2, so 2 to both side then down 2 as well
           ex: 2 at 1:2 it would be 2,2 (3/2)=1.5=1, so min is 1, extending 1 to each side
                and down by 1
so create a prefix sums for all cells in both down left and down right?


  [ 3,  4,  5,   1,   3 ],
  [ 3,  6,  8,   7,   4 ],
  [ 20, 33, 206, 48,  17 ],
  [ 1,  25, 38,  210, 49 ],
  [ 4,  4,  27,  40,  215 ]

  [ 3,   4,   5,   1,  3 ],
  [ 7,   8,   5,   5,  3 ],
  [ 28,  35,  205, 43, 10 ],
  [ 36,  210, 48,  14, 1 ],
  [ 214, 51,  16,  3,  5 ]
    
 */

var getBiggestThree001 = function(grid) {
    const rowLen = grid.length;
    const colLen = grid[0].length;
    const preDownLeft = Array(rowLen).fill(null).map(() => Array(colLen).fill(0));
    preDownLeft[0] = grid[0].slice();

    const preDownRight = Array(rowLen).fill(null).map(() => Array(colLen).fill(0));
    preDownRight[0] = grid[0].slice();

    // Downward to the left prefixes
    for (let row = 1; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            preDownLeft[row][col] = grid[row][col];
            if (col !== 0) preDownLeft[row][col] += preDownLeft[row-1][col-1];
        }
    }

    // downward to the right prefixes
    for (let row = 1; row < rowLen; row++) {
        for (let col = colLen-1; col > -1; col--) {
            preDownRight[row][col] = grid[row][col];
            if (col !== colLen-1) preDownRight[row][col] += preDownRight[row-1][col+1];
        }
    }

    // for each cell, find the max squre and get the sum
    const maxHeap = new MaxSpeedHeap(3);
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            const leftExt = col;
            const rightExt = colLen - col - 1;
            const bottomExt = Math.floor((rowLen - row - 1) / 2);
            const ext = Math.min(leftExt, rightExt, bottomExt);
            let val;
            if (ext === 0) {
                maxHeap.insert(grid[row][col]);
            } else {
                const leftLeft = preDownRight[row+ext][col-ext] - preDownRight[row][col];
                const leftRight = preDownLeft[row+ext*2][col] - preDownLeft[row+ext][col-ext];
                const rightRight = preDownLeft[row+ext][col+ext] - preDownLeft[row][col];
                const rightLeft = preDownRight[row+ext*2][col] - preDownRight[row+ext][col+ext];
                let sum = grid[row][col] + leftLeft + leftRight + rightRight + rightLeft;
                sum -= grid[row+ext*2][col];
                maxHeap.insert(sum);
            }
        }
    }
    return [...new Set(maxHeap.getHeap())];
};


var getBiggestThree = function(grid) {
    const m = grid.length, n = grid[0].length;
    const sumsSet = new Set();
    
    // Every cell itself is a trivial (size 0) rhombus.
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            sumsSet.add(grid[r][c]);
            
            // Try rhombus with side length "size" >= 1.
            for (let size = 1; r + 2 * size < m && c - size >= 0 && c + size < n; size++) {
                let sum = 0;
                // Walk along the four edges.
                // 1. Top -> Right edge: from (r, c) to (r+size, c+size)
                for (let i = 0; i <= size; i++) {
                    sum += grid[r + i][c + i];
                }
                // 2. Right -> Bottom edge: from (r+size, c+size) to (r+2*size, c)
                for (let i = 0; i <= size; i++) {
                    sum += grid[r + size + i][c + size - i];
                }
                // 3. Bottom -> Left edge: from (r+2*size, c) to (r+size, c-size)
                for (let i = 0; i <= size; i++) {
                    sum += grid[r + 2 * size - i][c - i];
                }
                // 4. Left -> Top edge: from (r+size, c-size) to (r, c)
                for (let i = 0; i <= size; i++) {
                    sum += grid[r + size - i][c - size + i];
                }
                
                // The four corner values are added twice (once in each adjacent edge).
                // Subtract them once each.
                sum -= grid[r][c] + grid[r + size][c + size] + grid[r + 2 * size][c] + grid[r + size][c - size];
                
                sumsSet.add(sum);
            }
        }
    }
    
    // Get unique sums, sort them in descending order, and return the top three.
    return Array.from(sumsSet).sort((a, b) => b - a).slice(0, 3);
};