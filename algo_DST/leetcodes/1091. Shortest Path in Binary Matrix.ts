/**
create another matrix of the same size
go through each cell of grid
    if current cell is 0
    check top, left, and top left cell to get the smallest
      current = smallest + 1
extract the bottom right cell value
    if 0, return -1
time: O(n*n)
space: O(n*n)

[0,1,1,0,0,0]
[0,1,0,1,1,0]
[0,1,1,0,1,0]
[0,0,0,1,1,0]
[1,1,1,1,1,0]
[1,1,1,1,1,0]

[0,0,1,0]
[1,0,1,0]
[1,1,0,1]
[0,0,0,0]
 */
var shortestPathBinaryMatrix = function(grid) {
    const gridLen = grid.length;
    if (grid[0][0] === 1 || grid[gridLen-1][gridLen-1] === 1) return -1;

    let layerCount = 1;
    const offsets = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
    const inbound = (row, col) => {
        return row > -1 && row < gridLen && col > -1 && col < gridLen;
    }
    let curLayer = [[0, 0]]; // [pos, [row, col]]
    const visited = new Set([`0:0`]);
    while (curLayer.length) {
        const newLayer = [];
        for (let [row, col] of curLayer) {
            if (row === gridLen-1 && col === gridLen-1) return layerCount;
            for (let [rowOffset, colOffset] of offsets) {
                const newRow = row + rowOffset;
                const newCol = col + colOffset;
                const posKey = `${newRow}:${newCol}`;
                if (inbound(newRow, newCol) && grid[newRow][newCol] === 0 && !visited.has(posKey)) {
                    newLayer.push([newRow, newCol]);
                    visited.add(posKey);
                }
            }
        }
        if (!newLayer.length) {
            return -1;
        } else {
            layerCount++;
        }
        curLayer = newLayer;
    }

    return layerCount;
};