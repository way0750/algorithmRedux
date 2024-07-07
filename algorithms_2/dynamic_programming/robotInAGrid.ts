/**
 * Robot in a Grid: Imagine a robot sitting on the upper left corner
 * of grid with r rows and c columns. The robot can only move in
 * two directions, right and down, but certain cells are "off limits"
 * such that the robot cannot step on them. Design an algorithm to
 * find a path for the robot from the top left to the bottom right.
 * 
 * solution 1: not using dynamic programming:
 * just simply use recursion to search all possible path
 * base case: current cell is the last cell of the matrix
 *   return [cell], this is a path
 *   or if current cell is a block or undefined, return []
 * what to always return: an array, it is a path. there may or may not be
 * anything in it.
 * what to do with return, if there is a length, then add self
 *   otherwise just return []
 * how to make problem smaller:
 * call right see if there is a path,
 * if there isn't, call bottom too
 * 
 * time and space
 * time: we will go through each and every single cell, so N*M
 * space: N+M because you can only go right or bottom
 * so the possible path will always be N + M
 */ 

export function search(matrix, rowIndex, columnIndex) {
  const curRow = matrix[rowIndex];
  const curCell = curRow[columnIndex];
  const rowCount = (matrix).length;
  const rowLength = curRow.length;
  // at the last cell
  if (rowIndex === rowCount-1 && columnIndex === rowLength-1) {
    return [curCell];
  } else if (!curCell) {
    // current cell is not passable
    return []
  }

  // keep searching
  // right then bottom
  const leftResult = search(matrix, rowIndex, columnIndex + 1);
  if (leftResult.length) {
    return [curCell, ...leftResult];
  } 

  const bottomResult = search(matrix, rowIndex, columnIndex + 1);
  if (bottomResult.length) {
    return [curCell, ...bottomResult];
  } 

  return [];
}

function findPath(matrix = []) {
  const rowIndex = 0;
  const columnIndex = 0;
  matrix = matrix.length ? matrix : [[]];
  return search(matrix, rowIndex, columnIndex);
}

// set 1 to passable, 0 to not passable