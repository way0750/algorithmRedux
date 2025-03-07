/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 breadth first search here
 if bomb mark X and end it all
 if blank, either mark B or number bombs near it
 keep expanding blanks until running into bombs next to a cell
 visited = B or a number
 */
 const offsets = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
 const isInBound = (board, row, col) => {
     const rowLen = board.length;
     const colLen = board[0].length;
     return row > -1 && row < rowLen && col > -1 && col < colLen;
 }
 // get all in bound adj cells 
 const getAdjCells = (board, row, col) => {
     const ans = [];
     for (let [rowOffset, colOffset] of offsets) {
         const newRow = row + rowOffset;
         const newCol = col + colOffset;
         const inBound = isInBound(board, newRow, newCol);
         if (inBound) ans.push([newRow, newCol]);
     }
     return ans;
 }
 
 const getBombCount = (board, row, col) => {
     let count = 0;
     const adjCells = getAdjCells(board, row, col);
     for (let [row, col] of adjCells) {
         if (board[row][col] === 'M') count++;
     }
     return count;
 }
 /**
 M: mine
 E: empty
 B: blank
 1: bomb count
 X: doooomed
 A: emtpy but visiting next
  */
 var updateBoard = function(board, click) {
     const [row, col] = click;
     if (board[row][col] === 'M') {
         board[row][col] = 'X';
         return board;
     }
     const q = [click];
     while (q.length) {
         // reveal it here, which also means marking it as "visited"
         const [row, col] = q.shift();
         // safe, mark either B or a number
         // now add next round of cells
         const adjBombCount = getBombCount(board, row, col);
         if (adjBombCount) {
             board[row][col] = `${adjBombCount}`;
         } else {
             board[row][col] = 'B';
             // no bomb found near this cell
             // expand from here only add Es
             const adjCells = getAdjCells(board, row, col);
             for (let [adjRow, adjCol] of adjCells) {
                 // only expand to a cell that's an 'E';
                 if (board[adjRow][adjCol] === 'E') {
                     q.push([adjRow, adjCol]);
                     board[adjRow][adjCol] = 'A';
                 }
             }
         }
     }
     return board;
 };