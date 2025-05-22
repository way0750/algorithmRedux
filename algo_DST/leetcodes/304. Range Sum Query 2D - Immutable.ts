/**
 * @param {number[][]} matrix
 do running sum top to bottom col by col
 then do a running sum row by row left right
    then right to left


30
86
98


3, 3
8,14
9,17

3,0,1,4
5,6,3,2

3,0,1,4
8,6,4,6

3, 3, 4, 8
5,11,14,16

3, 3, 4, 8
8,14,18,24

3, 3, 4, 8
8,14,18,24

[
  [ 3,   3,  4,  8, 10 ],
  [ 8,  14, 18, 24, 27 ],
  [ 9,  17, 21, 28, 36 ],
  [ 13, 22, 26, 34, 49 ],
  [ 14, 23, 30, 38, 58 ]
]

make running sum for the entire matrix first
 */
var NumMatrix = function(matrix) {
    const runningSums = matrix.map((row) => row.slice());
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    for (let row = 0; row < rowLen; row++) {
        for (let col = 1; col < colLen; col++) {
            runningSums[row][col] += runningSums[row][col-1];
        }
    }
    for (let col = 0; col < colLen; col++) {
        for (let row = 1; row < rowLen; row++) {
            runningSums[row][col] += runningSums[row-1][col];
        }
    }
    this.runningSums = runningSums;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
[
  [ 3,   3,  4,  8, 10 ],
  [ 8,  14, 18, 24, 27 ],
  [ 9,  17, 21, 28, 36 ],
  [ 13, 22, 26, 34, 49 ],
  [ 14, 23, 30, 38, 58 ]
]

21 - 9 - 4 + 3

38 14 24 8
21  9  4 3
36 17 10 3
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    const total = this.runningSums[row2][col2];
    const left = col1 === 0 ? 0 : this.runningSums[row2][col1-1];
    const top = row1 === 0 ? 0 : this.runningSums[row1-1][col2];
    const overlap = col1 === 0 || row1 === 0 ? 0 : this.runningSums[row1-1][col1-1];
    // console.log(total, left, top, overlap);
    return total - left - top + overlap;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */