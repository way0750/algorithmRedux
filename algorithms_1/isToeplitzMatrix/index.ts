// Given a matrix, write a function to determine whether the matrix is a Toeplitz matrix. A Toeplitz matrix  is a matrix in which each descending diagonal from left to right is constant.
// Follow-up question: Assume that the entire matrix cannot fit into memory and should be read from file. Assume that a few rows and all columns can be read in. How could we verify?
// Wikipedia: https://en.wikipedia.org/wiki/Toeplitz_matrix
// image: https://wikimedia.org/api/rest_v1/media/math/render/svg/ffb0725a08b85d5c447cbec3907e39b818d55941

/**
 * solution 1:
 * as you go through each row, just keep checking the current cell vaue against the one above and to the left
 * as soon as a inconsistent value found, return false;
 * 
 * solution 2:
 * maintain a row which is a copy of the very first row
 * then each time when you get access to the next row, you pop the last one since it's no longer needed
 * and push another number (the first one from the new row), to the front
 * then again, check new row's each index vaue against same index from the state maintaning row
 *   whenever found inconsistance return false;
 * 
 * solution 2 will be able to handle the follow-up question becaues it doesn't need to know the entire size of the matrix, and it
 * maintains the most current state in which we can use to check if there are inconsistances
 */

// solution 2, without dealing with the follow up:
// time complexity: n * m
// space: m (the width of matrix)
export function isToeplitzMatrix(matrix, previousRow?: Array<any>) {
  return matrix.every((row) => {
    if (!previousRow) {
      previousRow = row.slice();
    } else {
      // the very last number is not needed for current row comparison
      previousRow.pop();
      // push the current row's first item in it, as a placeholder item to pass the comparison
      // but it will be useful for subsequent rows' comparison
      previousRow.unshift(row[0]);
    }
    return row.every((cell, index) => cell === previousRow[index]);
  });
}

// a reimplementation that maintains previous comparison state for handling the follow up case above 
function makeIsToeplitzMatrixFunc() {
  let previousRows;
  let isCurrentlyToeplitz = true;
  return function isToeplitzMatrixPartially(partialMatrix) {
    // passing previousRows into isToeplitzMatrix, this way it will be mutated and maintain the most recent
    // row for next comparison.
    if (!isCurrentlyToeplitz) {
      return false;
    }
    if (!previousRows) {
      // set up the previous row before the first time calling isToeplitzMatrix
      previousRows = partialMatrix[0].slice();
      previousRows.shift(); 
      previousRows.push(Infinity); //a placeholder value that will get popped
    }
    isCurrentlyToeplitz = isToeplitzMatrix(partialMatrix, previousRows);
    return isCurrentlyToeplitz;
  };
}

const flattenArray = (arr) => {
  for (let i = arr.length-1; i > -1; i--) {
    const ele = arr[i];
    if (ele.constructor === Array) {
      const flattenSubArr = flattenArray(ele);
      arr.splice(i, 1, ...flattenSubArr);
    }
  }
  return arr;
}

class Heap {
  heap: Array<any>;
  constructor() {
    this.heap = [];
  }
  insert(num) {
    this.heap.push(num);
    let curIndex = this.heap.length - 1;
    let parentIndex = Math.floor(( curIndex - 1) / 2);
    while (this.heap[curIndex] < this.heap[parentIndex]) {
      const temp = this.heap[curIndex];
      this.heap[curIndex] =this.heap[parentIndex];
      this.heap[parentIndex] = temp;
      curIndex = parentIndex;
      parentIndex = Math.floor(( curIndex - 1) / 2);
    }
  }

  remove() {
    if (!this.heap.length) return undefined;
    const firstEle = this.heap[0];
    this.heap[0] = this.heap[this.heap.length-1];
    this.heap.pop();
    let curIndex = 0;
    let leftChild = 1;
    let rightChild = 2;
    while (this.heap[curIndex] > this.heap[leftChild] || this.heap[curIndex] > this.heap[rightChild] ) {
      const nextChildIndex = this.heap[rightChild] > this.heap[leftChild] ? leftChild : rightChild;
      const temp = this.heap[curIndex];
      this.heap[curIndex] = this.heap[nextChildIndex];
      this.heap[nextChildIndex] = temp;
      curIndex = nextChildIndex;
      leftChild = curIndex * 2 + 1;
      rightChild = curIndex * 2 + 2;
    }

    return firstEle;

  }
}

describe('isToeplitzMatrix', () => {
  it.only('test minheap', () => {
    const heap = new Heap;
    heap.insert(9);
    heap.insert(8);
    heap.insert(7);
    heap.insert(4);
    heap.insert(6);
    heap.insert(5);
    heap.insert(3);
    heap.insert(2);
    heap.insert(1);
    expect(heap.remove()).to.equal(1);
    expect(heap.remove()).to.equal(2);
    expect(heap.remove()).to.equal(3);
    expect(heap.remove()).to.equal(4);
    expect(heap.remove()).to.equal(5);
    expect(heap.remove()).to.equal(6);
    expect(heap.remove()).to.equal(7);
    expect(heap.remove()).to.equal(8);
    expect(heap.remove()).to.equal(9);
  });
  it('should flatten array', () => {
    const arr = [
      1,2,3,
      [1,2,3],
      1,2,3,
      [4,5,[6,7,[8,1,2,3,4,[5,6,7,8]]]]
    ];
    const result = flattenArray(arr);
    expect(result).to.equal([])
  });
  it('should return true', () => {
    const matrix = [
      [1,2,3,4,5],
      [6,1,2,3,4],
      [7,6,1,2,3],
      [8,7,6,1,2],
      [9,8,7,6,1],
    ];
    expect(isToeplitzMatrix(matrix)).to.be.true;
  });

  it('should return false', () => {
    const matrix = [
      [1,2,3,4,5],
      [6,1,2,3,4],
      [7,6,1,2,3],
      [8,7,6,1,2],
      [9,18,7,6,1],
    ];
    expect(isToeplitzMatrix(matrix)).to.be.false;
  });
});

describe('isToeplitzMatrix handling follow up case', () => {
  it('should return true', () => {
    const fileRows = [
      [1,2,3,4,5],
      [6,1,2,3,4],
      [7,6,1,2,3],
      [8,7,6,1,2],
      [9,8,7,6,1],
    ];
    const func = makeIsToeplitzMatrixFunc();
    const results = fileRows.map((row) => {
      return func([row]);
    });
    // mimic printing things out
    expect(results).to.deep.equal([true, true, true, true, true]);
  });

  it('should return false', () => {
    const fileRows = [
      [1,2,3,4,5],
      [6,1,2,3,4],
      [7,6,11,2,3], // notice the 11?
      [8,7,6,1,2],
      [9,8,7,6,1],
    ];

    const func = makeIsToeplitzMatrixFunc();
    const results = fileRows.map((row) => {
      return func([row]);
    });
    expect(results).to.deep.equal([true, true, false, false, false]);
  });
});