/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 if sub-recursive return is true, then just keep on returning true
    if not, then try the next option
each call will have its own current char
and current index of the word

compare both
    if same then find the next char
    if next char is out of bound
        or invalid char
        return false

base case:
    current char === word[current index] && index === word.length-1
        return true;
    out of bound or invalid char
        return false
what to always return:
    boolean
what to do with return:
    if true, keep on returning back
    if false, try next option
how to make problem smaller / make progress:
    pass the row, col to next call
 */
    var exist = function(board, word) {
        const rowLen = board.length;
        const colLen = board[0].length;
        const dfs = (row, col, idx) => {
            if (row < 0 || row >= rowLen || col < -1 || col >= colLen) return false;
            if (board[row][col] !== word[idx]) return false;
            if (board[row][col] === word[idx] && idx === word.length-1) return true;
            // get other chars
            // mark current pos as visited by setting the val to .
            // make sure to back it back
            const originalChar = board[row][col];
            board[row][col] = '.';
            const ans = dfs(row+1, col, idx+1) ||
                dfs(row-1, col, idx+1) ||
                dfs(row, col-1, idx+1) ||
                dfs(row, col+1, idx+1);
            board[row][col] = originalChar;
            return ans;
        }
        for (let row = 0; row < rowLen; row++) {
            for (let col = 0; col < colLen; col++) {
                // do dfs search here
                if (dfs(row, col, 0)) return true;
            }
        }
        return false;
    };