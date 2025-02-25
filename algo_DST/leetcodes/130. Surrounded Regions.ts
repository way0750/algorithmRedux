/**
 * You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

Connect: A cell is connected to adjacent cells horizontally or vertically.
Region: To form a region connect every 'O' cell.
Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.

 

Example 1:

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

Explanation:


In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

Example 2:

Input: board = [["X"]]

Output: [["X"]]

 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] is 'X' or 'O'.
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 check all the 0s on the edge
 and expand them. all the 0s that are connected to those 0s are safe
 the rest are converted to xs
 time: O(n*m)
 space: O(n*m)

 go through the outer edge first checking for Os
    for each O, expand and mark every O as A
 go through the matrix again
    return all O to X and all A to O
 */
    var solve = function(board) {
        const rowLen = board.length;
        const colLen = board[0].length
        const DFS = (row, col) => {
            const outBound = 0 > row || row === rowLen || 0 > col || col === colLen;
            if (outBound || board[row][col] !== 'O') return;
            board[row][col] = 'A';
            DFS(row+1, col);
            DFS(row-1, col);
            DFS(row, col+1);
            DFS(row, col-1);
        };
    
        const rows = [0, board.length-1];
        rows.forEach((row) => {
            board[row].forEach((_, col) => {
                if (board[row][col] === 'O') {
                    DFS(row, col);
                }
            });
        });
        const cols = [0, board[0].length-1];
        board.forEach((_, row) => {
            cols.forEach((col) => {
                if (board[row][col] === 'O') {
                    DFS(row, col);
                }
            })
        });
    
        board.forEach((row) => {
            row.forEach((cell, col) => {
                if (cell === 'O') row[col] = 'X';
                if (cell === 'A') row[col] = 'O';
            });
        })
    };