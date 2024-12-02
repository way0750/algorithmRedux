/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100

cycle through the 4 directions:
left bound
right bound
top bound
bottom bound

offset:
[row, col, bound?]
[0, 1, [top: right, bottom, left]]
[
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

time: O(n)
space: O(n)
 */

function spiralOrder(matrix: number[][]): number[] {
    let posOffsets = [ [0, 1], [1, 0], [0, -1], [-1, 0] ];
    let boundOffsets = [
        // top, right, bottom, left
        [1, 0, 0, 0],
        [0, -1, 0, 0],
        [0, 0, -1, 0],
        [0, 0, 0, 1],
    ];
    let top = 0;
    let right = matrix[0].length-1;
    let bottom = matrix.length-1;
    let left = 0;
    let offsetCount = 0;
    const ans = [];
    let round = matrix.length * matrix[0].length;
    let row = 0;
    let col = 0;
    while (round--) {
        ans.push(matrix[row][col]);
        let [rOffset, cOffset] = posOffsets[offsetCount % 4];
        const newRow = row + rOffset;
        const newCol = col + cOffset;
        if (newRow < top || newCol > right || newRow > bottom || newCol < left) {
            const boundOffset = boundOffsets[offsetCount % 4];
            top += boundOffset[0];
            right += boundOffset[1];
            bottom += boundOffset[2];
            left += boundOffset[3];
            offsetCount++;
        }
        [rOffset, cOffset] = posOffsets[offsetCount % 4];
        row += rOffset;
        col += cOffset;
    }


    return ans;
};