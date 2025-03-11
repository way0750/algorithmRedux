/**
 * Place N
queens on an N × N chessboard so that no two queens attack each other. A queen can attack horizontally, vertically, or diagonally.
 */

/**
 * 
 * how to think of this in terms of back track:
 * partial solution
 *  place one queen
 * and incrementally build next state of a potential complete solution
 *  place another queen in the next recursive call
 * back track:
 *  if couldn't place a queen at any time, infom the previous stact that we have hit a dead end
 *      in the previous stack, should try another solution
 * if all N queens are placed
 *  we have found a way
 *      find a way to record the solution
 */
export const offsets = [
    [0, -1], // to left
    [0, 1], // to right
    [-1, 0], // to top
    [1, 0], // to bottom
    [-1, -1], // to top left
    [-1, 1], // to top right
    [1, -1], // to bottom left
    [1, 1], // to bottom right
];
const mark = (board, row, col, val) => {
    const n = board.length;
    const inBound = (row, col) => row > -1 && row < n && col > -1 && col < n;
    let idx = 0; 
    const q = [[row, col]];
    while (idx < q.length) {
        const [row, col] = q[idx];
        board[row][col] = val;
        for (let [rowOffset, colOffset] of offsets) {
            const newRow = row + rowOffset;
            const newCol = col + colOffset;
            if (inBound(newRow, newCol)) q.push([newRow, newCol]);
        }
    }
}
function placeNQueens(n) {
    let board = Array(n).fill(() => Array(n).fill(' '));
    const dfs = (curQueen) => {
        /**
         * recursive case:
         *  never recursive call, unless, we find a place to put a queen and there are still more queens to place
         * what to always return
         *      boolean
         * what to do with returns?
         *      record/state has already been record in the top most level, the board. But we will use the boolean returned as a way to decide to try another move or end the search
         * how to make problem smaller or make progress:
         *      1 queen / row, so we will try different col
         */
        // when we get here, that means we still need to place at least one queen
        for (let col = 0; col < board[curQueen].length; col++) {
            if (board[curQueen][col] !== ' ') continue
            mark(board, curQueen, col, 'X');
            board[curQueen][col] = 'Q';
            if (curQueen === n-1) return true;
            const otherQueens = dfs(curQueen + 1);
            if (otherQueens) return true; // if sub recursive calls return true, we are done

            // else we are back tracking
            mark(board, curQueen, col, ' ');
        }
        return false; // no way to place
    }

    for (let Q = 0; Q < n; Q++) {
        const isValid = dfs(Q);
        if (isValid) {
            return board.forEach((row) => row.forEach((val, colIdx) => {
                if (val ==='X') row[colIdx] = ' ';
            }));
        }
    }
}