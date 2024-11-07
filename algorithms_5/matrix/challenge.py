"""
Tricks and techniques:

- The way to do breadth first search in a matrix:
    numRegions()


"""




"""
This problem was asked by Uber.

You are given a 2-d matrix where each cell consists of either /, \, or an empty space. Write an algorithm that determines into how many regions the slashes divide the space.

For example, suppose the input for a three-by-six grid is the following:

\    /
 \  /
  \/
Considering the edges of the matrix as boundaries, this divides the grid into three triangles, so you should return 3.

my solution without actual code:
loop through matrix cell by cell
when find a empty call that hasn't been visited, do a breadth first search to mark all connecting empty cells as visited. Doing so to essentially mark ten entire connect region as visited. once done update a function level counter by +1
once done loop through the matrix we will have the region count
time: matrix length for looping through it, and breath first search will essentially, at worst, do another matrix length loop once
so time: O(matrix)
space: O(matrix) because we will need to have a record of same size, at worst case, to keep track of visited cells

"""

from collections import deque

def numRegionsGPT(grid):
    def bfs(start_row, start_col):
        queue = deque([(start_row, start_col)])
        visited[start_row][start_col] = True
        
        while queue:
            row, col = queue.popleft()
            for d_row, d_col in directions:
                new_row, new_col = row + d_row, col + d_col
                if 0 <= new_row < rows and 0 <= new_col < cols and not visited[new_row][new_col]:
                    if grid[new_row][new_col] == ' ':
                        visited[new_row][new_col] = True
                        queue.append((new_row, new_col))

    rows, cols = len(grid), len(grid[0])
    visited = [[False] * cols for _ in range(rows)]
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]  # Up, Down, Left, Right

    regions = 0

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == ' ' and not visited[r][c]:
                bfs(r, c)
                regions += 1

    return regions

def numRegions(matrix):
    directions = [
        [1,  0], # up
        [-1, 0], # down
        [0, -1], # left
        [0,  1] # right
    ]
    visited = set()
    row_length = len(matrix)
    col_length = len(matrix[0])
    def bfs(row, col):
        queue = deque([[row, col]])
        visited.add(f'{row}_{col}')
        while queue:
            row, col = queue.popleft()
            for row_offset, col_offset in directions:
                new_row = row + row_offset
                new_col = col + col_offset
                in_bound = 0 <= new_row < row_length and 0 <= new_col < col_length
                not_visited = f'{new_row}_{new_col}' not in visited
                if in_bound and not_visited:
                    if matrix[new_row][new_col] == ' ':
                        visited.add(f'{new_row}_{new_col}')
                        queue.append([new_row, new_col])
    count = 0
    for row_index in range(len(matrix)):
        for col_index in range(len(matrix[row_index])):
            is_empty_cell = matrix[row_index][col_index] == ' '
            is_not_visited = f'{row_index}_{col_index}' not in visited
            if is_empty_cell and is_not_visited:
                bfs(row_index, col_index)
                count += 1
    return count

# Test the function with an example input
grid = [
    ['\\', ' ', ' ', ' ', ' ', '/'],
    [' ', '\\', ' ', ' ', '/', ' '],
    [' ', ' ', '\\', '/', ' ', ' ']
]

print(numRegions(grid))  # Output: 3

