/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board?

time: O(board size * board size)
space: word length
 */

function exist(board: string[][], word: string): boolean {
    const visited = new Set();
    const search = (r, c, i) => {
        const row = board[r] || [];
        const char = row[c];
        const setKey = `${r}:${c}`;
        if (!char || word[i] !== char || visited.has(setKey)) return false;
        if (i === word.length-1 && word[i] === char) return true;
        visited.add(setKey);
        const ans = search(r+1, c, i+1) ||
            search(r-1, c, i+1) ||
            search(r, c+1, i+1) ||
            search(r, c-1, i+1);
        visited.delete(setKey);
        return ans;
    }
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (search(r, c, 0)) return true;
        }
    }

    return false;
};